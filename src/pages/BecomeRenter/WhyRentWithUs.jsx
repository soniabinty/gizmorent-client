import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import gadgets from "../../assets/svg/Add friends-amico.svg";

const features = [
    "Access to the latest gadgets",
    "Flexible rental periods",
    "Affordable rates",
    "No long-term commitment"
];

const WhyBecomeRenter = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-10 bg-white">
            {/* Text Section */}
            <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    <span className="text-Primary">Why</span> Become a Renter?
                </h2>
                <p className="text-gray-600 mt-4 text-lg">
                    Renting gadgets has never been easier. Enjoy the latest technology
                    without the commitment of ownership. Flexible rental periods and
                    affordable rates make it a perfect choice for everyone.
                </p>

                <ul className="space-y-2 text-gray-700 text-md mt-4">
                    {features.map((feature, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-2 md:gap-3 w-[97%] md:max-w-full mx-auto md:mx-0"
                        >
                            <IoMdCheckmarkCircleOutline className="text-Primary w-5 h-5" />
                            <span className="md:text-md text-md text-left">{feature}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-6">
                    <a
                        href="#"
                        className="px-6 py-3 text-white text-md font-semibold bg-Primary rounded-lg shadow-md hover:bg-[#d95b00] transition duration-300"
                    >
                        Start Renting Now
                    </a>
                </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 ">
                <img src={gadgets} alt="GizmoRent Booking" className="rounded-lg w-[75%]" />
            </div>
        </section>
    );
};

export default WhyBecomeRenter;