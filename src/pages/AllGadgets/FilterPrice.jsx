import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, fetchGadgets } from "../../Redux/Feature/gadgetSlice";

const FilterPrice = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.gadgets.filters);

  // Local state for range slider
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Handle Sort By Price (Radio Buttons)
  const handleSortChange = (e) => {
    let minPrice = 0, maxPrice = Infinity;

    if (e.target.value === "Low") {
      maxPrice = 100;
    } else if (e.target.value === "Medium") {
      minPrice = 100;
      maxPrice = 500;
    } else if (e.target.value === "High") {
      minPrice = 500;
    }

    dispatch(setFilters({ minPrice, maxPrice }));
    dispatch(fetchGadgets({ ...filters, minPrice, maxPrice }));
  };

  // Handle Price Range (Slider)
  const handleRangeChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceRange([priceRange[0], value]); // Update max price
    dispatch(setFilters({ minPrice: priceRange[0], maxPrice: value }));
    dispatch(fetchGadgets({ ...filters, minPrice: priceRange[0], maxPrice: value }));
  };

  return (
    <div className="my-10">
      {/* Sort By Price */}
      <h3 className="text-xl font-semibold">Sort By Price</h3>
      <div className="my-5 space-y-4">
        {["Low", "Medium", "High"].map((label) => (
          <div key={label} className="flex items-center gap-3">
            <input
              type="radio"
              name="price-sort"
              value={label}
              className="radio focus:text-Primary radio-xs"
              onChange={handleSortChange}
            />
            <p className="font-semibold text-gray-500">{label}</p>
          </div>
        ))}
      </div>

      {/* Filter By Price */}
      <h3 className="text-xl font-semibold mt-6">Filter By Price</h3>
      <p className="text-gray-500 text-sm">Your range: {priceRange[0]} - {priceRange[1]}</p>
      <input
        type="range"
        min="0"
        max="1000"
        value={priceRange[1]}
        onChange={handleRangeChange}
        className="w-full mt-2 range range-xs"
      />
    </div>
  );
};

export default FilterPrice;
