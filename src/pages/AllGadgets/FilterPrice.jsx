import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, fetchGadgets } from "../../Redux/Feature/gadgetSlice";

const FilterPrice = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.gadgets.filters);

  const highestPrice = 1000;
  const [priceRange, setPriceRange] = useState([0, highestPrice]);

  useEffect(() => {
    dispatch(setFilters({ minPrice: 0, maxPrice: highestPrice }));
    dispatch(fetchGadgets({ ...filters, minPrice: 0, maxPrice: highestPrice }));
  }, []);

  const updateFilter = (min, max) => {
    setPriceRange([min, max]);
    dispatch(setFilters({ minPrice: min, maxPrice: max }));
    dispatch(fetchGadgets({ ...filters, minPrice: min, maxPrice: max }));
  };

  const handleRangeChange = (e) => {
    const newMax = parseInt(e.target.value);
    updateFilter(priceRange[0], newMax);
  };

  const handleMinChange = (e) => {
    const min = parseInt(e.target.value);
    if (min <= priceRange[1]) updateFilter(min, priceRange[1]);
  };

  const handleMaxChange = (e) => {
    const max = parseInt(e.target.value);
    if (max >= priceRange[0]) updateFilter(priceRange[0], max);
  };

  const handlePresetClick = (range) => {
    if (range === "low") updateFilter(0, 100);
    else if (range === "medium") updateFilter(100, 500);
    else if (range === "high") updateFilter(500, highestPrice);
  };

  const handleReset = () => {
    updateFilter(0, highestPrice);
  };

  return (
    <div className="border-t border-gray-300 pt-4 mt-4">
      <h3 className="font-semibold text-gray-700 border-l-4 border-Primary pl-2 mb-3">
        Price
      </h3>

      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <p>The highest price is ${highestPrice.toFixed(2)}</p>
        <button
          onClick={handleReset}
          className="text-gray-400 hover:text-gray-700 text-xs font-medium"
        >
          Reset
        </button>
      </div>

      {/* Preset buttons */}
      <div className="flex gap-2 mb-4">
        {["Low", "Medium", "High"].map((label) => {
          const key = label.toLowerCase();
          return (
            <button
              key={key}
              onClick={() => handlePresetClick(key)}
              className="text-sm px-3 py-1 rounded-full bg-Primary text-white hover:opacity-90 transition-all duration-200"
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Slider */}
      <input
        type="range"
        min="0"
        max={highestPrice}
        value={priceRange[1]}
        onChange={handleRangeChange}
        className="w-full mt-2 accent-Primary"
      />

      {/* Min/Max inputs */}
      <div className="flex items-center gap-2 mt-3">
        <div className="flex items-center border rounded px-2 py-1 w-1/2">
          <span className="text-sm text-gray-500 mr-1">$</span>
          <input
            type="number"
            min="0"
            max={priceRange[1]}
            value={priceRange[0]}
            onChange={handleMinChange}
            className="w-full text-sm text-gray-700 outline-none"
          />
        </div>
        <span className="text-gray-500">-</span>
        <div className="flex items-center border rounded px-2 py-1 w-1/2">
          <span className="text-sm text-gray-500 mr-1">$</span>
          <input
            type="number"
            min={priceRange[0]}
            max={highestPrice}
            value={priceRange[1]}
            onChange={handleMaxChange}
            className="w-full text-sm text-gray-700 outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterPrice;
