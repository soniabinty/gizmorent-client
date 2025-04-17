import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-10">
            <div className="container mx-auto px-6 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Column 1 - Company Info */}
                    <div>
                        <h2 className="text-xl font-semibold text-white">GizmoRent</h2>
                        <p className="mt-3 text-gray-400">
                            Your go-to platform for renting and lending gadgets securely and affordably.
                        </p>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div>
                        <h2 className="text-xl font-semibold text-white">Quick Links</h2>
                        <ul className="mt-3 space-y-2">
                            {[
                                { name: "Home", link: "/" },
                                { name: "Browse Gadgets", link: "/allgadgets" },
                                { name: "Pricing", link: "/pricing" },
                                { name: "About", link: "/about" },
                                { name: "Contact Us", link: "/contact-us" }
                            ].map((linkItem, index) => (
                                <li key={index}>
                                    <a href={linkItem.link} className="hover:text-Primary transition">{linkItem.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Services */}
                    <div>
                        <h2 className="text-xl font-semibold text-white">Our Services</h2>
                        <ul className="mt-3 space-y-2">
                            {[
                                { name: "Instant Rental Confirmation", link: "#" },
                                { name: "Secure Payments", link: "#" },
                                { name: "Flexible Rental Periods", link: "#" },
                                { name: "Write Review", link: "/reviews" }
                            ].map((service, index) => (
                                <li key={index}>
                                    <a href={service.link} className="hover:text-Primary transition">{service.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 - Contact Info */}
                    <div>
                        <h2 className="text-xl font-semibold text-white">Contact Us</h2>
                        <p className="mt-3 text-gray-400 flex items-center gap-2"><FaLocationDot></FaLocationDot>House 42, Dhanmondi Dhaka 1209, Bangladesh</p>
                        <p className="text-gray-400 flex items-center gap-2"><IoCallOutline></IoCallOutline> +880 1777-123456</p>
                        <p className="text-gray-400 flex items-center gap-2"><IoMdMailOpen /> support@gizmorent.com</p>
                        <div className="flex gap-4 mt-3">
                            <a href="#" className="hover:text-Primary transition">Facebook</a>
                            <a href="#" className="hover:text-Primary transition">Twitter</a>
                            <a href="#" className="hover:text-Primary transition">Instagram</a>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
                    <p>&copy; {new Date().getFullYear()} GizmoRent. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
