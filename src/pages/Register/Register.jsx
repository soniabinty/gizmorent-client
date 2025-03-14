import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import SocialLogin from '../../Shared/SocialLogin';
import loginImg from "../../assets/image/visual.png";

const Register = () => {
   const {
      register,
  
      formState: { errors },
    } = useForm();
  return (
    <div className="bg-gradient-to-t from-[#ffd166] to-gray-200 ... ">
     <div className="md:flex min-h-screen  mx-auto  rounded-lg max-w-7xl">
          <div className="flex-1 flex flex-col justify-center  py-10 lg:px-6">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Welcome to GizmoRent</h2>
              <p className="px-12">
                Discover the best rental options tailored to your needs. Explore
                listings, compare prices, and secure your ideal rental today
              </p>
            </div>
    
            <div className=" lg:px-12  ">
              <form className="card-body " >


                          {/* Name Field */}
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text mb-2">Name</span>
            </label>
            <input
              {...register("name", { required: "Name is required." })}
              type="text"
              placeholder="Name"
              className="input input-bordered border-none w-full rounded-lg"
            />
            {errors.name && <span className="pl-1 text-red-600">{errors.name.message}</span>}
          </div>

          
                {/* Email Field */}
                <div className="form-control flex flex-col">
                  <label className="label">
                    <span className="label-text mb-2">Email</span>
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required.",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email format.",
                      },
                    })}
                    type="email"
                    placeholder="Email"
                    className="input input-bordered border-none w-full rounded-lg"
                  />
                  {errors.email && (
                    <span className="pl-1 text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                </div>
    
                {/* Password Field */}
                <div className="form-control">
                  <label className="label text-start">
                    <span className="label-text mb-2">Password</span>
                  </label>
                  <input
                    // {...register("password", {
                    //   required: "Password is required.",
                    //   minLength: {
                    //     value: 6,
                    //     message: "Password must be at least 6 characters long.",
                    //   },
                    //   pattern: {
                    //     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                    //     message:
                    //       "Password must include uppercase, lowercase, number, and special character.",
                    //   },
                    // })}
                    type="password"
                    placeholder="Password"
                    className="input input-bordered border-none w-full rounded-lg"
                  />
                  {/* {errors.password && (
               <span className="pl-1 text-red-600">{errors.password.message}</span>
             )} */}
                </div>
                {/* Photo Field */}
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text mb-2">Photo</span>
            </label>
            <input
              {...register("image", { required: "Photo is required." })}
              type="file"
              className="file-input file-input-bordered file-input-warning w-full lg:w-auto"
            />
            {errors.image && <span className="pl-1 text-red-600">{errors.image.message}</span>}
          </div>
    
                {/* Submit Button */}
                <div className="form-control mt-6">
                  <button className="btn w-full border-none rounded-lg hover:bg-Primary bg-Primary text-white ">
                  REGISTER
                  </button>
                </div>
              </form>
              <p className='px-6'>
        Already have an account?
        <Link className="text-Primary" to={"/login"}>
          Login!
        </Link>
      </p>
            </div>
    
            <div className="lg:px-10 max-sm: ">
              <SocialLogin></SocialLogin>
            </div>
    
            <div className="lg:px-12 m-6">
              <Link to="/">
                {" "}
                <button className=" mb-4 underline  text-Primary ">
                  Back To Home
                </button>
              </Link>
            </div>
          </div>
    
          <div
            className=" flex-1 max-sm:hidden  relative"
            style={{
              backgroundImage: `url('${loginImg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className=" bg-opacity-80 absolute inset-0 mx-auto text-white  ">
              <div className="p-3 text-center space-y-4 w-11/12 mx-auto ">
                <div className="mt-[380px]">
                  <div class="chat chat-start">
                    <div class="chat-bubble c bg-Accent text-black">
                      What kind of Gadgets do you Need?
                    </div>
                  </div>
                  <div class="chat chat-start">
                    <div class="chat-bubble  bg-Primary text-black">
                      Assign me to your Necessity of Daily Life.
                    </div>
                  </div>
                  <div class="chat chat-start">
                    <div class="chat-bubble  bg-Accent text-black">
                      Feel Free to Contact With Us!!!
                    </div>
                  </div>
                  <div class="chat chat-start">
                    <div class="chat-bubble   bg-Primary text-black">
                      Rent your Needs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Register;