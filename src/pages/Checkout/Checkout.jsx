import axios from "axios";
import { useForm } from "react-hook-form";
import CartTotal from "./CartTotal";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Prepare payment initiation data
      const paymentData = {
        total_amount: 1000, // Replace with actual total amount (can be dynamic)
        cus_name: data.name,
        cus_email: data.email,
        cus_phone: data.phone,
      };

      // Call backend to initiate payment
      const response = await axios.post("http://localhost:3000/initiate-payment", paymentData);

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

  return (
    <div className="max-w-7xl mx-auto px-5">
      <h2 className="text-4xl font-semibold mb-4">Checkout</h2>
      <div className="flex flex-col-reverse md:flex-row gap-6">
        <div className="md:w-2/3">
          <div>
            <h3 className="text-xl font-semibold">Billing Details</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 mt-4">
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="input w-full py-6"
                placeholder="Name*"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}

              <input
                type="number"
                {...register("phone", { required: "Phone number is required" })}
                className="input w-full py-6"
                placeholder="Phone Number*"
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}

              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="input w-full py-6"
                placeholder="Email*"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

              <input
                type="text"
                {...register("productCode", {
                  required: "Product code is required",
                })}
                className="input w-full py-6"
                placeholder="Product Code*"
              />
              {errors.productCode && (
                <p className="text-red-500">{errors.productCode.message}</p>
              )}

              <div className="flex gap-2">
                <input
                  type="text"
                  {...register("pickupLocation", {
                    required: "Pick-up location is required",
                  })}
                  className="input w-full py-6"
                  placeholder="Pick-Up Location*"
                />
                <input
                  type="date"
                  {...register("pickupDate", {
                    required: "Pick-up date is required",
                  })}
                  className="input w-full py-6"
                />
              </div>
              <div className="flex">
                {errors.pickupLocation && (
                  <p className="text-red-500 w-1/2">
                    {errors.pickupLocation.message}
                  </p>
                )}
                {errors.pickupDate && (
                  <p className="text-red-500 w-1/2">
                    {errors.pickupDate.message}
                  </p>
                )}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  {...register("dropLocation", {
                    required: "Drop-off location is required",
                  })}
                  className="input w-full py-6"
                  placeholder="Drop-Off Location*"
                />
                <input
                  type="date"
                  {...register("dropDate", {
                    required: "Drop-off date is required",
                  })}
                  className="input w-full py-6"
                />
              </div>
              <div className="flex">
                {errors.dropLocation && (
                  <p className="text-red-500 w-1/2">
                    {errors.dropLocation.message}
                  </p>
                )}
                {errors.dropDate && (
                  <p className="text-red-500 w-1/2">
                    {errors.dropDate.message}
                  </p>
                )}
              </div>

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
                className="bg-Primary py-4 px-10 mt-4 text-white"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
        <div className="md:w-1/3">
          <CartTotal></CartTotal>
        </div>
      </div>
    </div>
  );
};

export default Checkout;