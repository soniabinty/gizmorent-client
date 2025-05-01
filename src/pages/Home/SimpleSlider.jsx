import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gadget from "../../assets/gadget.png";
import Augmented_reality from "../../assets/vr.png";
import camera_collection from "../../assets/camera_collection.png";
import { Typewriter } from "react-simple-typewriter";
import { Bounce } from "react-awesome-reveal";
import { Link, useNavigate } from "react-router-dom";

export default function SimpleSlider() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: false, // Disable fade effect for better mobile experience
        },
      },
    ],
  };

  const slides = [
    {
      src: gadget,
      title: "Explore Our Featured Gadgets",
      description:
        "Discover the latest and most innovative gadgets available for rent. From smart home devices to cutting-edge tech, we offer top-rated products at unbeatable prices. Whether you're a tech enthusiast or a professional, our collection has something for everyone.",
      buttons: ["Explore Gadgets", "Go Premium"],
    },
    {
      src: Augmented_reality,
      title: "Augmented Reality Rentals",
      description:
        "Step into the future with our Augmented Reality devices. Perfect for gaming, education, or professional use, our AR rentals provide an immersive experience like no other. Try out the latest AR headsets and accessories today!",
        buttons: ["Explore Gadgets", "Go Premium"],
    },
    {
      src: camera_collection,
      title: "Professional Camera Rentals",
      description:
        "Capture every moment in stunning detail with our high-quality camera rentals. From DSLRs to mirrorless cameras, we offer a wide range of professional photography and videography equipment. Perfect for events, travel, or creative projects.",
        buttons: ["Explore Gadgets", "Go Premium"],
    },
    {
      src: gadget, // Replace with another image if available
      title: "Smart Home Devices",
      description:
        "Upgrade your living space with our smart home devices. Rent the latest smart speakers, security cameras, and home automation systems to make your home smarter and more efficient. Experience the convenience of modern technology.",
        buttons: ["Explore Gadgets", "Go Premium"],
    },
    {
      src: Augmented_reality, // Replace with another image if available
      title: "Virtual Reality Experiences",
      description:
        "Immerse yourself in a new world with our Virtual Reality headsets. Whether for gaming, training, or entertainment, our VR rentals provide an unforgettable experience. Explore the possibilities of VR today!",
        buttons: ["Explore Gadgets", "Go Premium"],
    },
  ];
  const navigate = useNavigate()
  const handleButtonClick = (action) => {
    if (action === "Explore Gadgets") {
     navigate("/allgadgets")
    } else if (action === "Go Premium") {
     navigate("/pricing")
    }
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className=" w-full bg-gradient-to-t from-sky-300 to-sky-100 ... overflow-hidden relative md:px-10 "
          >
            <div className="flex flex-col md:flex-row-reverse max-w-7xl mx-auto justify-center items-center gap-8 p-5 h-full">
              {/* Image Section (50% width on desktop, full width on mobile) */}
              <div className="w-full md:h-[420px] flex items-center justify-center md:w-1/2">
                <img
                  className=" object-cover rounded-md "
                  src={slide.src}
                  alt={slide.title}
                />
              </div>

              {/* Text and Buttons Section (50% width on desktop, full width on mobile) */}
              <div className="w-full md:w-1/2 h-full flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl font-semibold ">
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
                <p className="mt-4 text-black font-semibold">
                  {slide.description}
                </p>
                <Bounce>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-7 mt-8 md:mt-12">
                    {slide.buttons.map((button, idx) => (
                      <button
                      onClick={() => handleButtonClick(idx === 0 ? "Explore Gadgets" : "Go Premium")}
                        key={idx}
                        className={`${
                          idx === 0
                            ? " bg-Primary"
                            : "bg-white  "
                        } inline-flex text-black items-center justify-center rounded-lg py-3 px-5 md:py-4 md:px-6 text-center text-sm md:text-base font-medium `}
                      >
                        {button}
                      </button>
                    ))}
                  </div>
                </Bounce>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
