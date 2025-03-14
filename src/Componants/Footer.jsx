import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
          {/* community */}
          <div>

            <div className="relative flex justify-start md:justify-center md:items-end">
              <img className="absolute bg-[#005f73] object-cover top-10 h-full w-full xl:mt-10 z-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_5_marketing_background.png" alt="background" />
              <div className="flex pt-36 md:pt-32 lg:pt-40 xl:pt-96 px-4 md:px-6 xl:px-20 flex-col justify-start items-start md:justify-center md:items-center relative z-10">
                
                <div className="flex flex-col items-start justify-start xl:justify-center xl:space-x-8 xl:flex-row">
                  <div className="flex justify-start items-center space-x-4">
                    
                    <div className="cursor-pointer w-12">
                      <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_5_marketing_svg1.svg" alt="logo" />
                    </div>
                    <p className="w-60 text-xl xl:text-2xl font-semibold leading-normal text-[#FF9F00]">GizmoRent</p>
                  </div>
                  <div className="mt-12 xl:mt-0 grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-y-0 w-full md:w-auto sm:gap-x-20 md:gap-x-28 xl:gap-8">
                    <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
                      <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">Company</h2>
                      <button className="text-left text-base hover:text-[#FF9F00] leading-none text-gray-100">About Us</button>
                      <button className="text-left text-base hover:text-[#FF9F00] leading-none text-gray-100">Contact Us</button>
                      <button className="text-left text-base hover:text-[#FF9F00] leading-none text-gray-100">Terms of Service</button>
                      <button className="text-left text-base hover:text-[#FF9F00] leading-none text-gray-100">Privacy Policy</button>
                    </div>
                    <div className="sm:w-40 md:w-auto xl:w-72 flex justify-start items-start flex-col space-y-6">
                      <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">Support</h2>
                      <button className="text-left text-base hover:text-[#FF9F00] leading-none text-gray-100">FAQ</button>
                      <button className="text-left text-base hover:text-[#FF9F00] leading-none text-gray-100">Help Center</button>
                      <button className="text-left text-base hover:text-[#FF9F00] leading-none text-gray-100">Return Policy</button>
                      <button className="text-left text-base hover:text-[#FF9F00] leading-none text-gray-100">Shipping Info</button>
                    </div>
                    <div className="xl:w-72 flex justify-start items-start flex-col space-y-6">
                      <h2 className="text-base xl:text-xl font-bold xl:font-semibold leading-4 xl:leading-5 text-white">Quick Links</h2>
                      <button className="text-base text-left hover:text-[#FF9F00] leading-none text-gray-100">Rent a Gadget</button>
                      <button className="text-base text-left hover:text-[#FF9F00] leading-none text-gray-100">Browse Categories</button>
                      <button className="text-base text-left hover:text-[#FF9F00] leading-none text-gray-100">Become a Seller</button>
                      <button className="text-base text-left hover:text-[#FF9F00] leading-none text-gray-100">Blog</button>
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex xl:justify-between xl:flex-row flex-col-reverse items-center xl:items-start w-full">
                  <p className="mt-10 md:mt-12 xl:mt-0 text-sm leading-none text-white">2025 <span className='text-[#FF9F00]'>GizmoRent</span>. All Rights Reserved</p>
                  <div className="mt-10 md:mt-12 xl:mt-0 md:flex-row flex-col flex md:justify-center w-full md:w-auto justify-start items-start space-y-4 md:space-y-0 md:items-center md:space-x-4 xl:space-x-6">
                    <button className="text-base leading-none text-white hover:text-[#FF9F00]">Terms of service</button>
                    <button className="text-base leading-none text-white hover:text-[#FF9F00]">Privacy Policy</button>
                    <button className="text-base leading-none text-white hover:text-[#FF9F00]">Security</button>
                    <button className="text-base leading-none text-white hover:text-[#FF9F00]">Sitemap</button>
                  </div>
                  <div className="flex justify-start md:justify-end items-start w-full md:w-auto md:items-center space-x-6">
                    <button className="text-white hover:text-gray-200 w-6">
                      <FaFacebookF />
                    </button>
                    <button className="text-white hover:text-gray-200 w-6">
                      <FaTwitter />
                    </button>
                    <button className="text-white hover:text-gray-200 w-6">
                      <FaInstagram />
                    </button>
                    <button className="text-white hover:text-gray-200 w-6">
                      <FaLinkedinIn />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    );
};

export default Footer;
