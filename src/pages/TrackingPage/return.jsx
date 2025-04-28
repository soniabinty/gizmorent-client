import { formatDistanceToNow } from "date-fns";
import React, { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css"; // Import default styles
import { useDispatch } from "react-redux";
import { updateOrderStatus } from "../../Redux/Feature/OrderSlice";

const ReturnSection = ({ order, fetchOrder }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countdown, setCountdown] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();

  console.log(order);

  // Update countdown every second
  useEffect(() => {
    const updateCountdown = () => {
      setCountdown(
        formatDistanceToNow(order?.returning_time, { addSuffix: true })
      );
    };

    updateCountdown(); // Initial update
    const interval = setInterval(updateCountdown, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [order?.returning_time]);

  // Handle Extend Rent button
  const handleExtendRent = () => {
    setIsModalOpen(true);
  };

  // Handle Return button
  const handleReturn = async () => {
    await dispatch(
      updateOrderStatus({ orderId: order._id, newStatus: "returned" })
    );
    await fetchOrder();
    alert("Order returned successfully!");
  };

  // Handle date selection and update expiry
  const handleDateSelect = async (date) => {
    if (date) {
      const newSelectedDate = new Date(date);
      const currentReturningTime = new Date(order?.returning_time);

      if (newSelectedDate <= currentReturningTime) {
        alert("Please select a date after the current expiry date!");
        return;
      }

      await dispatch(
        updateOrderStatus({
          orderId: order._id,
          newStatus: "extended",
          newReturningTime: newSelectedDate.toISOString(),
        })
      );

      setIsModalOpen(false);
      setSelectedDate(null);
      await fetchOrder();
      alert(
        `Rental successfully extended to ${newSelectedDate.toLocaleString()}`
      );
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

            onClick={handleReturn}
            className="bg-Primary text-white px-4 py-2 rounded hover:bg-orange-600"

          >
            Return
          </button>
        </div>

        {/* Right Section: Countdown Timer */}
        <div className="text-right">
          <p className="text-sm font-medium">
            Expiry Time: {new Date(order?.returning_time).toLocaleString()}
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
                disabled: { before: new Date(order?.returning_time) },
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
