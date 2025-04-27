import React from 'react';

const Benefits = () => {
    const benefits = [
        "Earn passive income from your unused gadgets",
        "Get insurance protection on all rented items",
        "Flexible rental periods to suit your needs",
        "Access a large community of trusted renters",
        "Grow your rental business with ease",
        "Enjoy exclusive discounts and offers",
        "Receive 24/7 customer support",
        "Participate in community events and promotions",
    ];

    return (
        <section className="py-10 bg-white rounded-lg shadow-lg px-6 md:px-12">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-Primary mb-4">
                    Become a Renter Today!
                </h2>
                <p className="text-gray-600">
                    Unlock new opportunities by renting out your gadgets. Enjoy exclusive benefits!
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                        <div className="w-3 h-3 mt-2 bg-Primary rounded-full mr-3"></div>
                        <p className="text-gray-700">{benefit}</p>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8">
                <button className="bg-Primary hover:bg-Secondary text-white font-bold py-3 px-8 rounded-full shadow-lg transition">
                    Join Now
                </button>
            </div>
        </section>
    );
};

export default Benefits;
