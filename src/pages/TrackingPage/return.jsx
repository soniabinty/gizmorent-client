import { formatDistanceToNow } from "date-fns";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"; // Import default styles
import { useDispatch } from "react-redux";
import { updateOrderStatus } from "../../Redux/Feature/OrderSlice";

const ReturnSection = ({ order }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expiryTime, setExpiryTime] = useState(new Date("2025-03-19T15:00:00"));
  const [countdown, setCountdown] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();

  const START_TIME = new Date("2025-03-19T09:00:00");
  console.log(order);

  // Update countdown every second
  useEffect(() => {
    const updateCountdown = () => {
      setCountdown(formatDistanceToNow(expiryTime, { addSuffix: true }));
    };

    updateCountdown(); // Initial update
    const interval = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [expiryTime]);

  // Handle Extend Rent button
  const handleExtendRent = () => {
    setIsModalOpen(true);
  };

  // Handle Return button
  const handleReturn = (orderId, status) => {
    dispatch(updateOrderStatus({ orderId, newStatus: status }));
    alert("Order returned successfully!");
  };

  // Handle date selection and update expiry
  const handleDateSelect = (date) => {
    if (date) {
      const newExpiry = new Date(date);
      setExpiryTime(newExpiry);
      setIsModalOpen(false);
      alert(`Rental extended to ${newExpiry.toLocaleString()}`);
    }
  };

  return (
    <div className="bg-gray-100 p-4  rounded-xl">
      <h3 className="text-lg font-semibold mb-2">Return / Extend Options</h3>
      <div className="flex flex-col sm:flex-row justify-between items-start">
        {/* Left Section: Buttons */}
        <div className="mb-4 sm:mb-0">
          <button
            onClick={handleExtendRent}
            className="bg-Secondary text-white px-4 py-2 rounded mr-2 hover:bg-sky-900"
          >
            Extend Rent
          </button>
          <button
            onClick={() => handleReturn(order._id, "returned")}
            className="bg-Primary text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Return
          </button>
        </div>

        {/* Right Section: Countdown Timer */}
        <div className="text-right">
          <p className="text-sm font-medium">
            Expiry Time: {expiryTime.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">Time Remaining: {countdown}</p>
        </div>
      </div>

      {/* Modal for Extend Rent */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              Select New Expiry Date
            </h2>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={(date) => {
                setSelectedDate(date);
                handleDateSelect(date);
              }}
              showOutsideDays
              modifiers={{
                disabled: { before: new Date() },
              }}
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReturnSection;
