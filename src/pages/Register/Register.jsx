import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuEye, LuEyeOff } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../Redux/authSlice';
import SocialLogin from '../../Shared/SocialLogin';
import loginImg from "../../assets/image/visual.png";

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const password = watch("password");

  const onSubmit = (data) => {
    // Add the default photoURL to the user data
    data.photoURL = "https://i.ibb.co/rQr6L83/default-avatar-icon-of-social-media-user-vector.jpg";

    // Dispatch the registration action
    dispatch(registerUser(data)).then((action) => {
      if (action.meta.requestStatus === 'fulfilled') {
        console.log("Registration successful", action.payload);
        navigate("/");
      } else {
        console.log("Registration failed", action.error);
      }
    });
  };

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
            <form className="card-body " onSubmit={handleSubmit(onSubmit)} >
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
              <div className="form-control relative">
                <label className="label text-start">
                  <span className="label-text mb-2">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Password is required.",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long.",
                    },
                  })}
                  type={isVisible ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered border-none w-full rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setIsVisible((prev) => !prev)}
                  className="absolute inset-y-12 right-0 outline-none flex items-center justify-center w-9 text-muted-foreground/80 hover:text-foreground"
                >
                  {isVisible ? <LuEyeOff size={16} /> : <LuEye size={16} />}
                </button>
                {errors.password && (
                  <span className="pl-1 text-red-600">{errors.password.message}</span>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="form-control relative">
                <label className="label text-start">
                  <span className="label-text mb-2">Confirm Password</span>
                </label>
                <input
                  {...register("confirmPassword", {
                    required: "Confirm Password is required.",
                    validate: (value) =>
                      value === password || "Passwords do not match.",
                  })}
                  type={isConfirmVisible ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="input input-bordered border-none w-full rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setIsConfirmVisible((prev) => !prev)}
                  className="absolute inset-y-12 right-0 outline-none flex items-center justify-center w-9 text-muted-foreground/80 hover:text-foreground"
                >
                  {isConfirmVisible ? <LuEyeOff size={16} /> : <LuEye size={16} />}
                </button>
                {errors.confirmPassword && (
                  <span className="pl-1 text-red-600">{errors.confirmPassword.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button className="btn w-full border-none rounded-lg hover:bg-Primary bg-Primary text-white " disabled={loading}>
                  {loading ? "Registering..." : "REGISTER"}
                </button>
              </div>
            </form>
            {error && <p className="text-red-600">{error}</p>}
            <p className='px-6'>
              Already have an account?{" "}
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
                <div className="chat chat-start">
                  <div className="chat-bubble c bg-Accent text-black">
                    What kind of Gadgets do you Need?
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-bubble  bg-Primary text-black">
                    Assign me to your Necessity of Daily Life.
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-bubble  bg-Accent text-black">
                    Feel Free to Contact With Us!!!
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-bubble bg-Primary text-black">
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