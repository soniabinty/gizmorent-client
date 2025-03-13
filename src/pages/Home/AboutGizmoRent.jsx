import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const AboutGizmoRent = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between ">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 flex justify-center ">
        <img
          src="https://i.ibb.co.com/Ng9LL6p9/Shakir.jpg"
          alt="GizmoRent Rental Platform"
          className="w-full h-auto  object-fill"
        />
      </div>

      {/* Right Side: Text */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-3">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          What is <span className="text-Primary">GizmoRent</span>
        </h2>
        <p className="text-gray-700 text-md mx-auto md:mx-0 w-[80%] text-center md:text-left">
          GizmoRent lets you rent gadgets easily or earn by sharing your tech.
          Secure, affordable, and hassle-free gadget rentals anytime!
        </p>

        <ul className="space-y-2 text-gray-700 text-md">
          {[
            "Rent top-quality gadgets at affordable prices",
            "Earn passive income by renting out your own gadgets",
            "Flexible rental periods tailored to your needs",
            "Safe and secure transactions with verified users",
          ].map((text, index) => (
            <li
              key={index}
              className="flex items-center gap-2 md:gap-3 w-[97%] md:max-w-full mx-auto md:mx-0"
            >
              <IoMdCheckmarkCircleOutline className="text-Primary w-5 h-5 " />
              <span className="md:text-md text-md text-left">{text}</span>
            </li>
          ))}
        </ul>

        <div className="w-full  flex items-center justify-start">
          <button className=" px-3 py-2 text-white bg-Primary hover:bg-Secondary rounded-lg text-lmd font-semibold shadow-md">
            Explore Rentals
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutGizmoRent;
