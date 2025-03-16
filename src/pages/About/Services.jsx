import { LuMoveRight } from "react-icons/lu";

const Services = () => {
    const ourServices = [
        { name: "Latest Gadgets", description: "Stay updated with the newest tech trends, from smartphones to wearables, for smarter purchase decisions.", icon: "/svg/line-graph-growth-svgrepo-com.svg" },
        { name: "Gadget Reviews", description: "Detailed, unbiased reviews of the latest gadgets, covering features, pros, cons, and performance to help you decide.", icon: "/svg/energy-saving-light-bulbs.svg" },
        { name: "Best Deals", description: "Find the best discounts, offers, and prices on tech products to get great value for your money.", icon: "/svg/deal-svgrepo-com.svg" },
    ];

    return (
        <div className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-16">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {ourServices.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg px-6 py-16 relative  font-medium transition-all duration-500 ease-in-out after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[4px] after:bg-Primary after:transition-all after:duration-500 hover:after:w-full">
                            <div className="flex flex-col items-center justify-center text-center">
                                <img src={item.icon} alt={item.name} className="w-16 mx-auto mb-4 transition-transform duration-500 hover:scale-105" />
                                <h3 className="text-2xl font-bold mb-4">{item.name}</h3>
                                <p className="text-gray-600 text-sm">{item.description}</p>
                                <div className="flex items-center mt-4 text-Primary font-medium transition-all duration-500 ease-in-out hover:text-orange-800">
                                    <p>Find A Service</p>
                                    <LuMoveRight className="ml-2 " />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;