import { useForm } from "react-hook-form";
import gadget from "./../../assets/gadget1.png";

const BookYourGadgets = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="bg-gray-100 md:flex items-center px-8 py-12">
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
              <p className="text-red-500 w-1/2">{errors.pickupDate.message}</p>
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
              <p className="text-red-500 w-1/2">{errors.dropDate.message}</p>
            )}
          </div>

          <div className="flex justify-center">
            <button type="submit" className="btn btn-neutral py-6 px-10 mt-4">
              Submit a Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookYourGadgets;
