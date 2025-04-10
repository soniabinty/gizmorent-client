/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LocationSelector from "../../Shared/LocationSelector";
import CartTotal from "./CartTotal";

const Checkout = () => {

  const { bookingDetails, loading, error } = useSelector(
    (state) => state.checkout
  );

  const { bookingDetails, paymentDetails, checkoutProduct, loading, error } =
    useSelector((state) => state.checkout);
  const axiosPubic = useAxiosPublic();

  console.log("Booking Details:", bookingDetails);
  console.log("Checkout Product:", checkoutProduct);
  console.log("Payment Details:", paymentDetails);



  const navigate = useNavigate()


  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    if (data.paymentMethod === "Credit Card") {
      navigate("/creditpayment");
      return;
    }

    try {
      // Prepare payment initiation data
      const paymentData = {
        total_amount: paymentDetails?.total || 0,
        cus_name: data.name,
        cus_email: data.email,
        cus_phone: data.phone,
      };

      // Call backend to initiate payment
      const response = await axiosPubic.post("/initiate-payment", paymentData);
      console.log("Payment Response:", response.data);

      // Redirect to SSLCommerz payment gateway
      if (response.data?.url) {
        window.location.href = response.data.url;
      } else {
        alert("Failed to initiate payment.");
      }
    } catch (error) {
      console.error("Payment initiation error:", error);
      alert("An error occurred during payment initiation.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const paymentMethod = watch("paymentMethod");

  return (
    <div className="max-w-7xl mx-auto px-5 mb-6">
      <h2 className="text-4xl font-semibold mb-4">Checkout</h2>
      <div className="flex flex-col-reverse md:flex-row gap-6">
        <div className="md:w-2/3">
          <div>
            <h3 className="text-xl font-semibold">Billing Details</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 mt-4">
              <input
                type="text"
                defaultValue={bookingDetails?.name}
                {...register("name", { required: "Name is required" })}
                className="input w-full py-6"
                placeholder="Name*"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}

              <input
                type="number"
                defaultValue={bookingDetails?.phone}
                {...register("phone", { required: "Phone number is required" })}
                className="input w-full py-6"
                placeholder="Phone Number*"
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}

              <input
                type="email"
                defaultValue={bookingDetails?.email}
                {...register("email", { required: "Email is required" })}
                className="input w-full py-6"
                placeholder="Email*"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              <LocationSelector
                control={control}
                register={register}
                setValue={setValue}
                watch={watch}
              />

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Payment Method</h3>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      {...register("paymentMethod", {
                        required: "Please select a payment method",
                      })}
                      value="Credit Card"
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span>Credit Card</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      {...register("paymentMethod", {
                        required: "Please select a payment method",
                      })}
                      value="SSLCommerz"
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span>SSLCommerz</span>
                  </label>

                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      {...register("paymentMethod", {
                        required: "Please select a payment method",
                      })}
                      value="Bank Transfer"
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span>Bank Transfer</span>
                  </label>
                </div>

                {errors.paymentMethod && (
                  <p className="text-red-500">{errors.paymentMethod.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-blue-600 py-4 px-10 mt-4 text-white"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
        <div className="md:w-1/3">
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default Checkout;