import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const featuredRentals = [
    {
        id: 1,
        title: "Latest Smartphone",
        description: "Experience the best performance with the latest smartphone models.",
        image: "http://images.pexels.com/photos/29157232/pexels-photo-29157232/free-photo-of-modern-smartphones-on-vibrant-yellow-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        features: [
            "High-quality camera",
            "Long-lasting battery",
            "Fast processor"
        ]
    },
    {
        id: 2,
        title: "Gaming Laptop",
        description: "Get the ultimate gaming experience with our top-tier gaming laptops.",
        image: "https://images.pexels.com/photos/5207240/pexels-photo-5207240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        features: [
            "High-resolution display",
            "Powerful GPU",
            "Ample storage"
        ]
    },
    {
        id: 3,
        title: "Smartwatch",
        description: "Stay connected and track your fitness with the latest smartwatches.",
        image: "https://images.pexels.com/photos/51011/pexels-photo-51011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        features: [
            "Fitness tracking",
            "Long battery life",
            "Water-resistant"
        ]
    }
];

const FeaturedRentals = () => {
    return (
        <div className="px-8 py-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                <span className="text-Primary">Featured</span> Rentals
            </h2>
            <p className="text-gray-600 mt-4 text-lg text-center">
                Explore our top featured rentals and choose the best gadgets for your needs.
            </p>
            <div className="grid gap-8 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {featuredRentals.map((rental) => (
                    <div key={rental.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <img src={rental.image} alt={rental.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800">{rental.title}</h3>
                            <p className="text-gray-600 mt-2">{rental.description}</p>
                            <ul className="space-y-2 text-gray-700 text-md mt-4">
                                {rental.features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <IoMdCheckmarkCircleOutline className="text-Primary w-5 h-5" />
                                        <span className="text-md">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6">
                                <a
                                    href="#"
                                    className="px-6 py-3 text-white text-md font-semibold bg-Primary rounded-lg shadow-md hover:bg-[#d95b00] transition duration-300"
                                >
                                    Rent Now
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedRentals;