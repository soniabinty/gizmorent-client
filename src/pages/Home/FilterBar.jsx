import { useState } from "react";

const FilterBar = () => {
    const [filters, setFilters] = useState({
        category: "",
        price: "",
        location: "",
        rating: "",
    });

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleSearch = () => {
        console.log("Filters Applied:", filters);
    };

    const [selectedLocation, setSelectedLocation] = useState("");
    const divisions = [
        "Dhaka",
        "Chattogram",
        "Khulna",
        "Rajshahi",
        "Barishal",
        "Sylhet",
        "Rangpur",
        "Mymensingh",
    ];


    return (
        <div className=" my-10 px-4 py-6 bg-white rounded-2xl shadow-md w-full max-w-4xl mx-auto">
            <h2 className="text-lg font-semibold text-center mb-3">Filters</h2>
            <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-center">
                {/* Category Filter */}
                <select
                    name="category"
                    value={filters.category}
                    onChange={handleChange}
                    className="select p-2 w-36 border border-gray-300 rounded-md outline-Primary"
                >
                    <option value="">Category</option>
                    <option value="Laptop">Laptop</option>
                    <option value="Camera">Camera</option>
                    <option value="Gaming Console">Gaming Console</option>
                </select>

                {/* Price Filter */}
                <select
                    name="price"
                    value={filters.price}
                    onChange={handleChange}
                    className="select p-2 w-36 border border-gray-300 rounded-md outline-Primary"
                >
                    <option value="">Price</option>
                    <option value="0-50">৳0 - ৳50</option>
                    <option value="50-200">৳50 - ৳200</option>
                    <option value="200+">৳200+</option>
                </select>

                {/* Location Filter */}
                <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="select p-2 w-36 border border-gray-300 rounded-md outline-Primary"
                >
                    <option disabled value="">
                        Pick a division
                    </option>
                    {divisions.map((division, index) => (
                        <option key={index} value={division}>
                            {division}
                        </option>
                    ))}
                </select>

                {/* Rating Filter */}
                <select
                    name="rating"
                    value={filters.rating}
                    onChange={handleChange}
                    className="select p-2 w-36 border border-gray-300 rounded-md  outline-Primary"
                >
                    <option value="">Rating</option>
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars & Up</option>
                    <option value="3">3 Stars & Up</option>
                </select>

                {/* Search Button */}
                <button
                    onClick={handleSearch}
                    className="bg-Primary text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600"
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default FilterBar;
