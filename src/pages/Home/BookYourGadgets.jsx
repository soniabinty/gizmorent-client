import { useForm } from "react-hook-form";
import gadget from "./../../assets/gadget1.png";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {
  fetchProductByCode,
  setBookingDetails,
} from "../../Redux/Feature/checkoutSlice";
import { useState } from "react";

const BookYourGadgets = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [quantity, setQuantity] = useState(1);

  // Increase/Decrease functions for quantity
  const increaseQuantity = () => setQuantity((prev) => Math.min(prev + 1, 10));
  const decreaseQuantity = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const onSubmit = async (data) => {
    try {
      const fullData = { ...data, quantity };
      dispatch(setBookingDetails(fullData));
      await dispatch(fetchProductByCode(data.productCode));
      navigate("/checkout");
    } catch (error) {
      console.error("Failed to fetch product:", error);
    }
  };

  return (
    <div className="bg-gray-100 md:flex items-center px-8 py-12 rounded-lg">
      <div className="md:w-1/2">
        <img className="md:p-8" src={gadget} alt="Gadget" />
      </div>
      <div className="md:w-1/2 space-y-3">
        <h3 className="text-4xl font-semibold text-center">
          Book Your Gadgets
        </h3>
        <p className="text-center">
          Get the latest tech at your fingertips! Browse, select, and book your
          favorite gadgets with ease. Whether it's smartphones, laptops,
          cameras, or any kind of gadget.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 mt-4">
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="input w-full py-6"
            placeholder="Name*"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

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
          <div className="flex items-center gap-4">
            <div className="flex flex-col md:w-1/2">
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
            </div>

            {/* Choose Month Section */}

            {/* Quantity Section */}
            <div className="flex items-center md:w-1/2 gap-3 px-2 py-2 bg-white border px-4 border-slate-300">
              <p className="">Choose Quantity:</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="bg-gray-300 px-2 py-1 rounded"
                >
                  -
                </button>
                <p className="">{quantity}</p>
                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="bg-gray-300 px-2 py-1 rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="btn bg-Primary text-white py-6 px-10 mt-4"
            >
              Submit a Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookYourGadgets;
