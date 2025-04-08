import React from 'react';
import { useForm } from 'react-hook-form';
import { FaPhone, FaWhatsapp } from 'react-icons/fa6';

const Message = () => {

  const {
      register,
  
      formState: { errors },
    } = useForm();
  return (

    <div className='space-y-6 '>

{/* seller detail */}
 

      {/* contact seller */}

        <div className='bg-white rounded-lg '>
             <h2 className='text-2xl px-6 pt-6 '>Contact Renter</h2>
             <form className="card-body ">
      {/* name */}
        <div className="form-control flex flex-col">
          <label className="label">
            <span className="label-text mb-2 font-bold">Name*</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Your Name"
            className="input input-bordered border-none bg-sky-100 w-full rounded-lg"
          />
          {errors.name && (
            <span className="pl-1 text-red-600">{errors.name.message}</span>
          )}
        </div>

        {/* email*/}
        <div className="form-control flex flex-col">
          <label className="label">
            <span className="label-text mb-2 font-bold">Email*</span>
          </label>

          <div className="flex items-center">
            <input
              {...register("email")}
              type="email`"
              placeholder="Your Email"
              className="input input-bordered border-none bg-sky-100 w-full rounded-lg"
            />
            {errors.email && (
              <span className="pl-1 text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        {/* text*/}

        <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text mb-2 font-bold">Text</span>
            </label>

            <div className="flex gap-5 items-center">
              <textarea   {...register("text")}
                type="text"
                placeholder="Your Message"
                className="input input-bordered border-none h-32 bg-sky-100 p-2 w-full rounded-lg">

              </textarea>
            
              {errors.text && (
                <span className="pl-1 text-red-600">
                  {errors.text.message}
                </span>
              )}

            </div>
          </div>
        <button className="btn bg-Primary hover:bg-Primary text-white mt-4 rounded-lg">Contact</button>

      </form>

    </div>
       
     
        
       
           </div>
  );
};

export default Message;