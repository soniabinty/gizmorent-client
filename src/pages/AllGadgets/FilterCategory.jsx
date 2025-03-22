import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, fetchGadgets } from "../../Redux/Feature/gadgetSlice";

const FilterCategory = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.gadgets.filters);

  const handleCategoryChange = (e) => {
    const updatedFilters = { ...filters, category: e.target.value };
    dispatch(setFilters(updatedFilters));
    dispatch(fetchGadgets(updatedFilters));
  };

  return (
    <div>
      <h3 className="text-xl font-semibold">Filter By Category</h3>
      <div className="my-5 space-y-4">

      <div className="flex items-center gap-3">
          <input
            type="radio"
            name="category"
            value="All"
            className="radio focus:text-Primary radio-xs"
            onChange={handleCategoryChange}
          />
          <p className="font-semibold text-gray-500">All</p>
        </div>


        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="category"
            value="Laptop"
            className="radio focus:text-Primary radio-xs"
            onChange={handleCategoryChange}
          />
          <p className="font-semibold text-gray-500">Laptop</p>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="category"
            value="Smartphone"
            className="radio focus:text-Primary radio-xs"
            onChange={handleCategoryChange}
          />
          <p className="font-semibold text-gray-500">Smartphone</p>
        </div>



        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="category"
            value="Tablet"
            className="radio focus:text-Primary radio-xs"
            onChange={handleCategoryChange}
          />
          <p className="font-semibold text-gray-500">Tablet</p>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="category"
            value="Gaming & VR"
            className="radio focus:text-Primary radio-xs"
            onChange={handleCategoryChange}
          />
          <p className="font-semibold text-gray-500">Gaming & VR</p>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="category"
            value="Audio & Music"
            className="radio focus:text-Primary radio-xs"
            onChange={handleCategoryChange}
          />
          <p className="font-semibold text-gray-500">Audio & Music</p>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="category"
            value="Wearables"
            className="radio focus:text-Primary radio-xs"
            onChange={handleCategoryChange}
          />
          <p className="font-semibold text-gray-500">Wearables</p>
        </div>
      </div>
    </div>
  );
};

export default FilterCategory;
