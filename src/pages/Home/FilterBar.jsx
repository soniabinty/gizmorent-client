import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, fetchGadgets } from "../../Redux/Feature/gadgetSlice";
import { useNavigate } from "react-router-dom";

const FilterBar = () => {
  const globalFilters = useSelector((state) => state.gadgets.filters);
  const [filters, setLocalFilters] = useState(globalFilters);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const updated = { ...filters, [e.target.name]: e.target.value };
    setLocalFilters(updated);
  };

  const handleSearch = () => {
    let updatedFilters = { ...filters };
  
    if (filters.price) {
      if (filters.price.includes('-')) {
        const [min, max] = filters.price.split('-').map(Number);
        updatedFilters.minPrice = min;
        updatedFilters.maxPrice = max;
      } else if (filters.price === "200+") {
        updatedFilters.minPrice = 200;
        updatedFilters.maxPrice = 999999; // Use a large number instead of Infinity
      }
      delete updatedFilters.price; // ✅ Remove original price string
    }
  
    dispatch(setFilters(updatedFilters));
    dispatch(fetchGadgets(updatedFilters));
    navigate("/allgadgets");
  };
  
  

  return (
    <div className="my-10 px-4 py-6 bg-white rounded-2xl shadow-md w-full max-w-4xl mx-auto">
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
          <option value="Speakers">Speakers</option>
          <option value="Desktop">Desktop</option>
          <option value="Projector">Projector</option>
          <option value="Air Conditioner">Air Conditioner</option>
        </select>

        {/* Price Filter with Dollar Ranges */}
        <select
          name="price"
          value={filters.price}
          onChange={handleChange}
          className="select p-2 w-36 border border-gray-300 rounded-md outline-Primary"
        >
          <option value="">Price</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-200">$50 - $200</option>
          <option value="200+">$200+</option>
        </select>

        {/* Rating Filter */}
        <select
          name="rating"
          value={filters.rating}
          onChange={handleChange}
          className="select p-2 w-36 border border-gray-300 rounded-md outline-Primary"
        >
          <option value="">Rating</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars & Up</option>
          <option value="3">3 Stars & Up</option>
        </select>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-Primary text-white px-4 py-2 rounded-md font-semibold hover:bg-sky-600"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
