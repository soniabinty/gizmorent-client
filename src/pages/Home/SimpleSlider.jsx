import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Our_Feature_Product from "../../assets/Our_Feature_Product.jpg";
import Top_Rented_This_Weeik from "../../assets/Top_Rented_This_Weeik.jpg";
import Happy_Customers from "../../assets/Happy_Customers.jpg";
import cameraRent from "../../assets/banner_4.jpg";
import Fast_Scure_Delivery from "../../assets/Fast_Scure_Delivery.jpg";
import { Typewriter } from "react-simple-typewriter";
import { Bounce } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export default function SimpleSlider() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    fade: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      src: Our_Feature_Product,
      title: "Explore Our Featured Products",
      description: "Top-rated gadgets available for rent at unbeatable prices.",
      buttons: ["Browse Now", "Get Started"],
    },
    {
      src: Top_Rented_This_Weeik,
      title: "This Week's Top Rentals",
      description: "Check out the most popular rented items of the week!",
      buttons: ["View Rentals", "Book Yours"],
    },
    {
      src: Happy_Customers,
      title: "Join Our Happy Customers",
      description: "Thousands of satisfied users renting with confidence.",
      buttons: ["Read Reviews", "Join Us"],
    },
    {
      src: cameraRent,
      title: "Professional Camera Rentals",
      description: "High-quality cameras for your photography and filming needs.",
      buttons: ["See Cameras", "Reserve Now"],
    },
    {
      src: Fast_Scure_Delivery,
      title: "Fast & Secure Delivery",
      description: "Get your rentals delivered quickly and safely to your doorstep.",
      buttons: ["Learn More", "Track Order"],
    },
  ];

  return (
    <div className="mx-auto mt-4">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="h-[600px]  w-full rounded-xl overflow-hidden relative bg-black bg-opacity-75"
          >
            <img
              className="h-[600px] object-cover w-full rounded-xl "
              src={slide.src}
              alt={slide.title}
            />
            <div className="absolute  top-0 h-full flex flex-col justify-center items-center w-full rounded-xl">
              <h3 className="text-4xl font-semibold text-center text-[#ffd166]">
                <Typewriter
                  words={[slide.title]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={30}
                  delaySpeed={1000}
                />
              </h3>
              <p className="mt-4 text-lg text-center text-white">
                {slide.description}
              </p>
              <Bounce>
                <div className="flex gap-7 mt-12">
                  {slide.buttons.map((button, idx) => (
                    <button
                      key={idx}
                      className={`${
                        idx === 0
                          ? "bg-[#ff6b00] hover:bg-orange-700"
                          : "bg-[#ffd166] hover:bg-yellow-500"
                      } inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-medium text-white sm:px-10 lg:px-8 xl:px-10`}
                    >
                      {button}
                    </button>
                  ))}
                </div>
              </Bounce>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}