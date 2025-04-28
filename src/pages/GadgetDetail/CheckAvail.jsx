import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CheckAvail = () => {
  const {
    register,
    formState: { errors },
  } = useForm();


  const handleCheck = (e) => {
    e.preventDefault(); 
    Swal.fire({
      title: "Gadget Available!",
      text: "The gadget is available now. You can proceed to booking.",
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK"
    });
  };
  

  return (
    <div className="bg-sky-100 rounded-lg mt-4 md:p-5">
      <h3 className="text-2xl font-bold mb-4">Check Availability</h3>
      <form className="space-y-4">
        {/* Pickup Date and Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Pick-up Date</span>
            </label>
            <input
              {...register("pickdate", { required: "Pick-up date is required" })}
              type="date"
              className="input input-bordered w-full"
            />
            {errors.pickdate && (
              <span className="text-red-600 text-sm mt-1">{errors.pickdate.message}</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Pick-up Time</span>
            </label>
            <input
              {...register("picktime", { required: "Pick-up time is required" })}
              type="time"
              className="input input-bordered w-full"
            />
            {errors.picktime && (
              <span className="text-red-600 text-sm mt-1">{errors.picktime.message}</span>
            )}
          </div>
        </div>

        {/* Drop-off Date and Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Drop-off Date</span>
            </label>
            <input
              {...register("dropdate", { required: "Drop-off date is required" })}
              type="date"
              className="input input-bordered w-full"
            />
            {errors.dropdate && (
              <span className="text-red-600 text-sm mt-1">{errors.dropdate.message}</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Drop-off Time</span>
            </label>
            <input
              {...register("droptime", { required: "Drop-off time is required" })}
              type="time"
              className="input input-bordered w-full"
            />
            {errors.droptime && (
              <span className="text-red-600 text-sm mt-1">{errors.droptime.message}</span>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button onClick={handleCheck} className="btn bg-Primary hover:bg-Primary text-white mt-4 rounded-lg  w-full">
          Check Availability
        </button>
      </form>
    </div>
  );
};

export default CheckAvail;