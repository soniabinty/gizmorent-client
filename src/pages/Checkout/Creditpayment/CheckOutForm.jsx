import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import { toPng } from "html-to-image";
import download from "downloadjs"; 


const CheckOutForm = () => {
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [modalIsOpen, setModalIsOpen] = useState(false); // Modal visibility state
  const [invoiceData, setInvoiceData] = useState([]);
  const user = useSelector((state) => state.auth.user);
  const { checkoutProduct, formData,  paymentDetails ,bookingDetails   } = useSelector((state) => state.checkout);
console.log(checkoutProduct)



  const [processing, setProcessing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Calculate the price (total amount to be paid)
  const price = paymentDetails?.total || 0;
console.log(checkoutProduct)

  useEffect(() => {
    if (price > 0) {
      axiosSecure
        .post("/create-payment-intent", { price })
        .then((res) => {
          if (res.data?.clientSecret) setClientSecret(res.data.clientSecret);
        })
        .catch((err) => console.error("Payment Intent Error:", err));
    }
  }, [price, axiosSecure]);

  const handleDownloadInvoice = () => {
    const invoiceElement = document.getElementById("export"); // Get element by ID
  
    if (!invoiceElement) return;
  
    toPng(invoiceElement, { cacheBust: true, backgroundColor: "#f0f9ff" })
      .then((dataUrl) => {
        download(dataUrl, "invoice.png");
      })
      .catch((err) => {
        console.error("Could not generate image", err);
      });
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
  
    setProcessing(true);
    setErrorMessage("");
    setSuccessMessage("");
  
    const card = elements.getElement(CardElement);
    if (!card) return setProcessing(false);
  
    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "no-email@example.com",
          },
        },
      });
  
      if (error) {
        setErrorMessage(error.message);
        setProcessing(false);
        return;
      }
  
      if (paymentIntent.status === "succeeded") {
        const paymentInfo = {
          userId: user._id,
          email: user.email,
          amount: parseInt(price),
          transactionId: paymentIntent.id,
          date: new Date(),
        };
  
        const orderData = checkoutProduct.map(product => ({
          amount: product.price*product.quantity,
          product_name: product.name,
          product_id: product.gadgetId,
          product_img: product.image,
          customer_name: formData?.name,
          email: user.email,
          customer_phone: formData?.phone,
          customer_address: `${formData?.upazila}, ${formData?.district}`,
          renting_time: 10,
          returning_time:10,
          status:"pending",
          quantity: product.quantity,
          orderId: product._id,
          date: new Date(),
          renterId: product.renterId
        }));
        
  
        const res = await axiosSecure.post("/payments", paymentInfo);
        console.log(res.data)
  
        if (res.data.acknowledged) {
          await axiosSecure.post("/orders", orderData);
  
          setSuccessMessage("Payment successful!");
       

          setInvoiceData(orderData); // Set order data for the modal
          setModalIsOpen(true); 
        } else {
          setErrorMessage("Payment succeeded but order creation failed.");
        }
      }
    } catch (err) {
      console.error("Payment Error:", err);
      setErrorMessage("Something went wrong.");
    } finally {
      setProcessing(false);
    }
  };
  
  

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg border">
      <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
        Amount being paid now: <span className="text-blue-600">${price.toFixed(2)}</span>
      </h2>

      <div className="flex justify-center gap-3 mb-4">
        <img src="https://img.icons8.com/color/48/visa.png" className="h-6" alt="Visa" />
        <img src="https://img.icons8.com/color/48/mastercard-logo.png" className="h-6" alt="Mastercard" />
        <img src="https://img.icons8.com/color/48/discover.png" className="h-6" alt="Discover" />
        <img src="https://img.icons8.com/color/48/amex.png" className="h-6" alt="Amex" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Cardholder's name</span>
          <input
            type="text"
            value={user?.displayName || ""}
            disabled
            className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm bg-gray-100 text-gray-700"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Card details</span>
          <div className="mt-1 p-4 border rounded-lg bg-white shadow-sm">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#32325d",
                    "::placeholder": { color: "#aab7c4" },
                  },
                  invalid: { color: "#fa755a" },
                },
              }}
            />
          </div>
        </label>

        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
        <button
  type="submit"
  disabled={!stripe || !clientSecret || processing}
  className={`w-full px-4 py-2 text-white font-semibold rounded-lg shadow-md ${
    processing
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-700 transition duration-300"
  }`}
>
  {processing ? "Processing..." : `Pay $${price.toFixed(2)}`}
</button>

        <p className="text-sm text-center text-gray-500 mt-4">
          Secure payments powered by <span className="font-bold">Stripe</span>.
        </p>
      </form>


         {/* Normal Tailwind Modal */}
         {modalIsOpen && (
  <div className="fixed inset-0 bg-sky-100/60 flex justify-center items-center  z-50 backdrop-blur-sm">
    <div className="bg-white rounded-2xl py-6  w-[500px] shadow-2xl animate-fade-in space-y-6">
      <h2 className="text-3xl font-bold text-center text-sky-700 mb-4">Invoice Summary</h2>
<div id='export' className="p-6">

 {/* Customer Information */}
      {invoiceData.length > 0 && (
        <div className="bg-sky-50 p-4 rounded-xl shadow-inner">
          <h3 className="text-xl font-semibold mb-2 text-sky-800">Customer Information</h3>
          <p><span className="font-medium">Name:</span> {invoiceData[0]?.customer_name}</p>
          <p><span className="font-medium">Email:</span> {invoiceData[0]?.email}</p>
          <p><span className="font-medium">Phone:</span> {invoiceData[0]?.customer_phone}</p>
          <p><span className="font-medium">Address:</span> {invoiceData[0]?.customer_address}</p>
        </div>
      )}

      {/* Order Details */}
      <div className="bg-sky-50 p-4 rounded-xl shadow-inner mt-3">
        <h3 className="text-xl font-semibold mb-2 text-sky-800">Order Details</h3>
        {invoiceData.map((order, index) => (
          <div key={index} className="">
            <p><span className="font-semibold">Product:</span> {order.product_name}</p>
            <p><span className="font-semibold">Price:</span> ${order.amount}</p>
            <p><span className="font-semibold">Quantity:</span> {order.quantity}</p>
            <p><span className="font-semibold">Status:</span> {order.status}</p>
            <p><span className="font-semibold">Order Date:</span> {new Date(order.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>

</div>
     

      {/* Buttons */}
      <div className="flex justify-between items-center mt-6 px-6">
        <button
          onClick={handleDownloadInvoice}
          className="bg-Primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300"
        >
          Download Invoice
        </button>

        <button
          onClick={() => setModalIsOpen(false)}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all duration-300"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default CheckOutForm;
