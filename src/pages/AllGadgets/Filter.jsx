import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGadgets, setFilters } from "../../Redux/Feature/gadgetSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.gadgets.filters);

  const handleSortChange = (event) => {
    const newSortOption = event.target.value;

   
    dispatch(setFilters({ sortOption: newSortOption }));

    
    dispatch(fetchGadgets({ ...filters, sortOption: newSortOption }));
  };

  return (
    <div className="flex justify-end max-sm:justify-start max-sm:mt-4">
      <select
        value={filters.sortOption}
        onChange={handleSortChange}
        className="border px-4 py-2 overflow-x-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-Primary"
      >
        <option value="Default">Default</option>
        <option value="HighToLow">Price - High to Low</option>
        <option value="LowToHigh">Price - Low to High</option>
      </select>
    </div>
  );
};

export default Filter;
