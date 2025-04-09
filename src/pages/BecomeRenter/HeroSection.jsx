import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        address: ""
    });
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user) {
            setFormData((prev) => ({
                ...prev,
                name: user.displayName || "",
                email: user.email || ""
            }));
        }
    }, [user]);
    

    const toggleModal = () => {
        if (!user) {
            navigate("/login");
        } else {
            setModalOpen(!isModalOpen);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/renter_request", formData);
            console.log(response.data);
            toggleModal();
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setErrorMessage(error.response.data.error);
            } else {
                setErrorMessage("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gray-800 text-white py-24 text-center">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Find the Perfect Rental for You</h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Explore a wide range of rental options and get started today.
                    </p>
                    <div className="mt-6 flex justify-center gap-4">
                        <button
                            className="bg-Primary hover:bg-orange-600 px-6 py-3 rounded-lg text-lg font-semibold"
                            onClick={toggleModal}
                        >
                            Become a Renter
                        </button>
                        <button
                            className="bg-Secondary hover:bg-sky-900 px-6 py-3 rounded-lg text-lg font-semibold"
                        >
                            List Your Products
                        </button>
                    </div>
                </div>
            </section>

            {/* Rental Application Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800/60 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
                        <h3 className="text-2xl font-bold mb-4">Rental Application</h3>
                        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="name">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border rounded"
                                    value={formData.name}
                                    readOnly={user}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border rounded"
                                    value={formData.email}
                                    readOnly={user}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="phone">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-3 py-2 border rounded"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="company">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    className="w-full px-3 py-2 border rounded"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="address">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    className="w-full px-3 py-2 border rounded"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="text-right">
                                <button
                                    type="button"
                                    className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 mr-2"
                                    onClick={toggleModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HeroSection;