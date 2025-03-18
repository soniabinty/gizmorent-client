import React from "react";
import { Link } from "react-router-dom";

const CartList = () => {
  // Sample cart data
  const cartItems = [
    {
      id: 1,
      name: "Realistic-digital-photo-camera-tripod",
      description: "10/Brown/#MPC#487",
      brand: "DJI",
      price: "25",
      image: "https://i.ibb.co.com/RTN5YDY8/realistic-digital-photo-camera-tripod.png", // Replace with actual image URL
      quantity: 1,
    },
    {
      id: 2,
      name: "iPhone 14 Pro Max",
      description: "128GB/Black",
      brand: "Apple",
      price: "18",
      image: "https://i.ibb.co.com/wZw1bjwJ/Adobe-Express-file-7.png", // Replace with actual image URL
      quantity: 1,
    },
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.replace("TK ", "").replace(",", "")) * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-Primary mb-6">YOUR CART</h1>
      <p className="text-Secondary mb-6">PRODUCT(S)</p>

      {cartItems.length === 0 ? (
        <p className="text-Secondary">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
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
                <div className="flex items-center space-x-2">
                  <button className="text-Accent hover:text-Primary">-</button>
                  <input
                    type="number"
                    defaultValue={item.quantity}
                    min="1"
                    className="w-16 p-2 border border-gray-200 rounded-lg text-center"
                  />
                  <button className="text-Accent hover:text-Primary">+</button>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  REMOVE
                </button>
              </div>
            </div>
          ))}
          <div className="text-right">
            <p className="text-xl font-bold text-Secondary">
              Total: ${totalPrice.toLocaleString()}
            </p>
            <Link
              to="/checkout"
              className="mt-4 inline-block bg-Primary text-white px-6 py-2 rounded-lg hover:bg-Primary/90"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;