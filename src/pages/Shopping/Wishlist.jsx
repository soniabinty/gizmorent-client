import React from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  // Sample wishlist data
  const wishlistItems = [
    {
      id: 1,
      name: "Epson 4K Projector",
      description: "10/Brown/#MPC#487",
      brand: "Sony",
      price: "$42",
      image: "https://i.ibb.co.com/W4NGdTwz/Adobe-Express-file-4.png", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Oculus Quest 3",
      description: "Wired/Headphone",
      brand: "Apple",
      price: "$35",
      image: "https://i.ibb.co.com/W4kY8TcV/Adobe-Express-file-6.png", // Replace with actual image URL
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-Primary mb-6">YOUR WISHLIST</h1>
      <p className="text-Secondary mb-6">PRODUCT(S)</p>

      {wishlistItems.length === 0 ? (
        <p className="text-Secondary">Your wishlist is empty.</p>
      ) : (
        <div className="space-y-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-xl font-semibold text-Secondary">
                    {item.name}
                  </h2>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-600">{item.brand}</p>
                  <p className="text-gray-600">{item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="text-Accent hover:text-Primary">
                  MOVE TO CART
                </button>
                <button className="text-red-500 hover:text-red-700">
                  REMOVE
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;