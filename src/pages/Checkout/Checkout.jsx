import { useSelector } from "react-redux";
import CartTotal from "./CartTotal";
import CheckoutForm from "./CheckoutForm";
import { useForm } from "react-hook-form";
import LocationSelector from "../../Shared/LocationSelector";
import { useNavigate } from "react-router";

const Checkout = () => {
  const { bookingDetails, loading, error } = useSelector(
    (state) => state.checkout
  );

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
    
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const paymentMethod = watch("paymentMethod");

  const handleOrder = () => {
    if (paymentMethod === 'Credit Card') {
      navigate('/creditpayment');
    }
  };
  
  

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

              {/* <input
                type="text"
                {...register("productCode", {
                  required: "Product code is required",
                })}
                className="input w-full py-6"
                placeholder="Product Code*"
              />
              {errors.productCode && (
                <p className="text-red-500">{errors.productCode.message}</p>
              )} */}

              {/* <div className="flex gap-2">
                <input
                  type="text"
                  defaultValue={bookingDetails.pickupLocation}
                  {...register("pickupLocation", {
                    required: "Pick-up location is required",
                  })}
                  className="input w-full py-6"
                  placeholder="Pick-Up Location*"
                />
                <input
                  type="date"
                  defaultValue={bookingDetails.pickupDate}
                  {...register("pickupDate", {
                    required: "Pick-up date is required",
                  })}
                  className="input w-full py-6"
                />
              </div> */}
              {/* <div className="flex">
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
                  defaultValue={bookingDetails.dropLocation}
                  {...register("dropLocation", {
                    required: "Drop-off location is required",
                  })}
                  className="input w-full py-6"
                  placeholder="Drop-Off Location*"
                />
                <input
                  type="date"
                  defaultValue={bookingDetails.dropDate}
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
              </div> */}
              <LocationSelector
                control={control}
                register={register}
                setValue={setValue}
                watch={watch}
              />

              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Payment Method</h3>
                {/* <label className="block font-medium">Payment Method</label> */}
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
                      value="PayPal"
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <span>PayPal</span>
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
              onClick={handleOrder}
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
