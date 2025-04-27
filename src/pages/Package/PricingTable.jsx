import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const plans = [
    {
        id: 1,
        name: "Basic Plan",
        price: "৳2500",
        period: "/month",
        features: {
            "Rent 1 Gadget": true,
            "7-Day Rental Period": true,
            "Standard Support": true,
            "Limited Access to Premium Devices": false,
            "Free Maintenance": false,
            "Device Swap": "1 Swap per Month",
            "Delivery & Pickup": false,
            "Early Access to New Gadgets": false,
            "Damage Protection": "Limited",
            "Extended Rental Options": false,
        },
        popular: false,
    },
    {
        id: 2,
        name: "Premium Plan",
        price: "৳5000",
        period: "/month",
        features: {
            "Rent 3 Gadgets": true,
            "14-Day Rental Period": true,
            "Priority Support": true,
            "Access to High-End Devices": true,
            "Free Maintenance": true,
            "Device Swap": "2 Swaps per Month",
            "Delivery & Pickup": true,
            "Early Access to New Gadgets": false,
            "Damage Protection": "Partial",
            "Extended Rental Options": "Up to 7 Days",
        },
        popular: true,
    },
    {
        id: 3,
        name: "Professional Plan",
        price: "৳10000",
        period: "/month",
        features: {
            "Unlimited Gadget Rentals": true,
            "30-Day Rental Period": true,
            "24/7 Premium Support": true,
            "Exclusive Access to Latest Tech": true,
            "Free Maintenance": true,
            "Free Delivery & Pickup": true,
            "Device Swap": "Unlimited Swaps",
            "Early Access to New Gadgets": true,
            "Damage Protection": "Full",
            "Extended Rental Options": "Flexible Extensions",
        },
        popular: false,
    },
];

const PricingTable = () => {
    return (
        <section className="text-gray-700 body-font overflow-hidden border-t border-gray-200">
            <div className="container px-5 py-16 mx-auto flex flex-wrap">
                <div className="lg:w-1/4 mt-48 hidden lg:block">
                    <div className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
                        {Object.keys(plans[0].features).map((feature, index) => (
                            <p
                                key={index}
                                className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                    } text-gray-900 h-12 text-center px-4 flex items-center justify-start`}
                            >
                                {feature}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg relative">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`lg:w-1/3 w-full mb-10 lg:mb-0 border-2 ${plan.popular ? "border-gray-300" : "border-gray-200"
                                } lg:border-none rounded-lg lg:rounded-none relative`}
                        >
                            {plan.popular && (
                                <span className="bg-Primary text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl lg:left-auto left-1/2 transform lg:transform-none translate-x-[-50%] z-10">
                                    POPULAR
                                </span>
                            )}
                            <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                                <h3 className="tracking-widest">{plan.name}</h3>
                                <h2 className="text-5xl text-gray-900 font-medium leading-none mb-4 mt-2">
                                    {plan.price}
                                </h2>
                                <span className="text-sm text-gray-600">{plan.period}</span>
                            </div>
                            {Object.keys(plan.features).map((feature, index) => (
                                <p
                                    key={index}
                                    className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                        } text-gray-600 h-12 text-center px-2 flex items-center justify-center border-t border-gray-300`}
                                >
                                    {typeof plan.features[feature] === "boolean" ? (
                                        plan.features[feature] ? (
                                            <FaCheck className="text-green-500" />
                                        ) : (
                                            <FaTimes className="text-red-500" />
                                        )
                                    ) : (
                                        plan.features[feature]
                                    )}
                                </p>
                            ))}
                            <div className="border-t border-gray-300 p-6 text-center rounded-bl-lg">
                                <button
                                    className="flex items-center mt-auto text-white bg-Primary border-0 py-2 px-4 w-full focus:outline-none hover:bg-sky-600 rounded"
                                >
                                    Choose Plan
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 ml-auto"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <p className="text-xs text-gray-500 mt-3">
                                    Literally you probably haven't heard of them jean shorts.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingTable;
