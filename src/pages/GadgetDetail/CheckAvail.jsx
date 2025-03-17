import React from "react";
import { useForm } from "react-hook-form";

const CheckAvail = () => {
  const {
    register,

    formState: { errors },
  } = useForm();
  return (
    <div className="bg-sky-100 rounded-lg mt-8 ">
      <h3 className="px-5 pt-5 text-2xl">Check Availability</h3>
      <form className="card-body ">
        {/* pickup */}
        <div className="form-control flex flex-col">
          <label className="label">
            <span className="label-text mb-2 font-bold">Pick-up Location</span>
          </label>
          <input
            {...register("pickup")}
            type="text"
            placeholder="Pick-up Location"
            className="input input-bordered border-none w-full rounded-lg"
          />
          {errors.pickup && (
            <span className="pl-1 text-red-600">{errors.pickup.message}</span>
          )}
        </div>

        {/* drop-off */}
        <div className="form-control flex flex-col">
          <label className="label">
            <span className="label-text mb-2 font-bold">Drop-off Location</span>
          </label>

          <div className="flex items-center">
            <input
              {...register("dropoff")}
              type="text"
              placeholder="Drop-off Location"
              className="input input-bordered border-none w-full rounded-lg"
            />
            {errors.drofoff && (
              <span className="pl-1 text-red-600">
                {errors.drofoff.message}
              </span>
            )}
          </div>
        </div>

        {/* pickup date */}

        <div className="flex justify-between items-center">
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text mb-2 font-bold">Pick-up Date</span>
            </label>

            <div className="flex gap-5 items-center">
              <input
                {...register("pickdate")}
                type="text"
                placeholder="Pick-up Date"
                className="input input-bordered border-none w-full rounded-lg"
              />
              {errors.pickdate && (
                <span className="pl-1 text-red-600">
                  {errors.pickdate.message}
                </span>
              )}

              <input
                {...register("picktime")}
                type="text"
                placeholder="Pick-up Time"
                className="input input-bordered border-none w-full rounded-lg"
              />
              {errors.picktime && (
                <span className="pl-1 text-red-600">
                  {errors.picktime.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/*pickoff date  */}

        <div className="flex justify-between items-center">
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text mb-2 font-bold">DROP-OFF-date</span>
            </label>

            <div className="flex gap-5 items-center">
              <input
                {...register("dropdate")}
                type="text"
                placeholder="DROP-OFF-date"
                className="input input-bordered border-none w-full rounded-lg"
              />
              {errors.dropdate && (
                <span className="pl-1 text-red-600">
                  {errors.dropdate.message}
                </span>
              )}

              <input
                {...register("droptime")}
                type="text"
                placeholder="Drop-OFF Time"
                className="input input-bordered border-none w-full rounded-lg"
              />
              {errors.droptime && (
                <span className="pl-1 text-red-600">
                  {errors.droptime.message}
                </span>
              )}
            </div>
          </div>
        </div>

        <button className="btn bg-Primary hover:bg-Primary text-white mt-4 rounded-lg">Check Availibity</button>

      </form>
    </div>
  );
};

export default CheckAvail;
