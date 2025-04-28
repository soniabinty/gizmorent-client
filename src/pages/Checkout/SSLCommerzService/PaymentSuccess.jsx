import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentSuccess = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
  const user = useSelector((state) => state.auth.user);
  const { checkoutProduct, formData  } = useSelector((state) => state.checkout);
  const axiosSecure = useAxiosSecure()
    useEffect(() => {
        const createOrder = async () => {
            const tran_id = queryParams.get("tran_id"); // SSLCommerz usually sends tran_id
            const amount = queryParams.get("amount");   // amount if you pass it
            const email = queryParams.get("cus_email"); // customer email if available

            if (tran_id && amount && email) {
                try {
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
                      await axiosSecure.post("/orders", orderData);
                } catch (error) {
                    console.error("Order creation failed:", error);
                }
            }
        };

        createOrder();
    }, [location.search]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md text-center">
                <h2 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h2>
                <p className="text-gray-600 mb-4">
                    Thank you for your payment. Your transaction has been successfully completed.
                </p>
                <Link
                    to="/"
                    className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl transition"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default PaymentSuccess;
