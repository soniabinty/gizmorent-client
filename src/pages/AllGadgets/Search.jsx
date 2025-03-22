import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, fetchGadgets } from "../../Redux/Feature/gadgetSlice";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.gadgets.filters);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    const updatedFilters = { ...filters, query: value };
    dispatch(setFilters(updatedFilters));
    dispatch(fetchGadgets(updatedFilters));
  };

  return (
    <div className="relative flex items-center w-full">
      <FaSearch className="absolute left-3 text-gray-500" />
      <input
        type="text"
        placeholder="Search By Title, Category..."
        value={query}
        onChange={handleSearch}
        className="w-full pl-10 pr-4 py-2 border focus:border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-Primary"
      />
    </div>
  );
};

export default Search;
