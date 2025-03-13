import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import truckRentImg from "../../assets/banner_1.jpg";
import eventSoundSystemsRent from "../../assets/banner_2.jpg";
import movieCameraRent from "../../assets/banner_3.jpg";
import cameraRent from "../../assets/banner_4.jpg";
import eventGeneratorRent from "../../assets/banner_5.jpg";
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
      src: truckRentImg,
      title: "Rent Trucks for Every Need",
      description: "Affordable truck rentals for your business or personal use.",
      buttons: ["Rent Now", "Learn More"],
    },
    {
      src: eventSoundSystemsRent,
      title: "Premium Sound Systems for Rent",
      description: "Get high-quality sound systems for your events and parties.",
      buttons: ["Explore Options", "Book Now"],
    },
    {
      src: movieCameraRent,
      title: "Professional Cameras for Filmmaking",
      description: "Rent top-tier cameras for your next big project.",
      buttons: ["See Cameras", "Get a Quote"],
    },
    {
      src: cameraRent,
      title: "High-Quality DSLR Rentals",
      description: "Capture every moment with our latest DSLR cameras.",
      buttons: ["Browse Collection", "Reserve Now"],
    },
    {
      src: eventGeneratorRent,
      title: "Reliable Generators for Your Events",
      description: "Ensure uninterrupted power supply for any occasion.",
      buttons: ["View Plans", "Book a Generator"],
    },
  ];

  return (
    <div className=" mx-auto mt-4">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="h-[600px] w-full rounded-xl overflow-hidden relative bg-black bg-opacity-75">
            <img className="h-[600px] object-cover w-full rounded-xl " src={slide.src} alt={slide.title} />
            <div className="absolute top-0 h-full flex flex-col justify-center items-center   w-full  rounded-xl">
              <h3 className="text-4xl font-semibold text-center text-[#ffd166]">
                <Typewriter words={[slide.title]} loop={0} cursor cursorStyle="_" typeSpeed={50} deleteSpeed={30} delaySpeed={1000} />
              </h3>
              <p className="mt-4 text-lg text-center text-white">{slide.description}</p>
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