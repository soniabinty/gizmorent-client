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
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 bg-white px-6 md:px-12 py-12 rounded-lg">
            {/* Text Section */}
            <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    <span className="text-Primary">Why</span> Become a Renter?
                </h2>
                <p className="text-gray-600 mt-4 text-lg">
                    Renting gadgets has never been easier. Enjoy the latest technology
                    without the commitment of ownership. Flexible rental periods and
                    affordable rates make it a perfect choice for everyone.
                </p>

                <ul className="space-y-3 text-gray-700 mt-4">
                    {features.map((feature, index) => (
                        <li
                            key={index}
                            className="flex items-start gap-3"
                        >
                            <IoMdCheckmarkCircleOutline className="text-Primary w-5 h-5 mt-1" />
                            <span className="text-md">{feature}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-6">
                    <a
                        href="#"
                        className="inline-block px-6 py-3 text-white font-semibold bg-Primary rounded-lg shadow hover:bg-[#d95b00] transition duration-300"
                    >
                        Start Renting Now
                    </a>
                </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
                <img
                    src={gadgets}
                    alt="GizmoRent Booking"
                    className="w-full max-w-[400px] md:max-w-[500px] rounded-lg"
                />
            </div>
        </section>
    );
};

export default WhyBecomeRenter;
