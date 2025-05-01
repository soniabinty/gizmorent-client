import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import delivery from "../../assets/images/delivery-drivers-delivering-online.jpg";
import { Navigate, useNavigate } from "react-router";

const RealTimeBooking = () => {
  const navigate = useNavigate()
  const features = [
    "Instant Rental Confirmation",
    "Secure & Multiple Payment Options",
    "Automated Receipts & Notifications",
    "Rent top-quality gadgets at affordable prices",
  ];
  return (
    <section className="flex flex-col md:flex-row items-center max-sm:pt-4 justify-between  py-6 px-6 md:px-16 rounded-lg  bg-white">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl  font-bold text-gray-900">
          <span className="text-Primary">Real-Time</span> Gadget Rentals &
          Secure Payments
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Enjoy instant booking and seamless payment processing with{" "}
          <span className="font-semibold text-gray-900">GizmoRent</span>. Stay
          updated on your rentals with real-time notifications and secure
          transactions.
        </p>

        <ul className="space-y-2 text-gray-700 text-md mt-4">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 md:gap-3 w-[97%] md:max-w-full mx-auto md:mx-0"
            >
              <IoMdCheckmarkCircleOutline className="text-Primary w-5 h-5 " />
              <span className="md:text-md text-md text-left">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button
          onClick={()=>navigate("allgadgets")}
            className="px-6 py-3 text-white text-md font-semibold bg-Primary rounded-lg shadow-md transition duration-300"
          >
            Start Renting Now
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-6 md:mt-0 relative">
        <img src={delivery} alt="GizmoRent Booking" className="rounded-lg " />
      </div>
    </section>
  );
};

export default RealTimeBooking;
