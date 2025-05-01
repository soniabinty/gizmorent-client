import React, { useEffect, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const FeaturedRentalItems = () => {
    const axiosPublic = useAxiosPublic();
    const [gadgets, setGadgets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGadgets = async () => {
            try {
                const response = await axiosPublic.get("/gadgets");
                const shuffledGadgets = response.data.sort(() => Math.random() - 0.5).slice(0, 3);
                setGadgets(shuffledGadgets);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchGadgets();
    }, [axiosPublic]);

    const truncateDescription = (description, limit) => {
        if (description.length > limit) {
            return description.substring(0, limit) + "...";
        }
        return description;
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className=" py-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                <span className="text-Primary">Featured</span> Rental Items
            </h2>
            <p className="text-gray-600 mt-4 text-lg text-center">
                Explore our top featured rentals and choose the best gadgets for your needs.
            </p>
            <div className="grid gap-8 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {gadgets.map((gadget) => (
                    <div key={gadget.id} className="bg-white max-sm:mx-4 shadow-lg rounded-lg overflow-hidden">
                        <div className='flex-grow flex items-center justify-center p-4 h-60'>
                            <img src={gadget.image} alt={gadget.title} className="w-50 mx-auto  object-cover" />
                        </div>

                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800">{gadget.title}</h3>
                            <p className="text-gray-600 mt-2">{truncateDescription(gadget.description, 75)}</p>
                            <ul className="space-y-2 text-gray-700 text-md mt-4">
                                {gadget.specifications.slice(0, 3).map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <IoMdCheckmarkCircleOutline className="text-Primary w-5 h-5" />
                                        <span className="text-md">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6">
                                <Link to={'/gadgetdetail'}>
                                    <button className='bg-Primary py-2 px-5 rounded-lg text-white font-bold'>
                                        Rent Now
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedRentalItems;