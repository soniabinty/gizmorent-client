import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, fetchGadgets } from "../../Redux/Feature/gadgetSlice";

const FilterCategory = () => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.gadgets.filters);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/json/subCategories.json");
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleToggle = (subcategoryName) => {
    const newSelection = selected === subcategoryName ? null : subcategoryName;
    setSelected(newSelection);

    const updatedFilters = {
      ...filters,
      category: newSelection || "", // if no selection, clear the category
    };
    dispatch(setFilters(updatedFilters));
    dispatch(fetchGadgets(updatedFilters));
  };

  const handleShowAll = () => {
    setSelected(null);
    const updatedFilters = {
      ...filters,
      category: "", // clear category filter
    };
    dispatch(setFilters(updatedFilters));
    dispatch(fetchGadgets(updatedFilters));
  };

  return (
    <div className="border-t border-gray-300 pt-3">
      <h3 className="font-semibold text-gray-700 border-l-4 border-Primary pl-2 mb-2">
        Filter by Category
      </h3>

      {/* "All" Option */}
      <div className="flex items-center gap-2 mb-2 ml-1">
        <input
          type="checkbox"
          checked={selected === null}
          onChange={handleShowAll}
          className="form-checkbox rounded text-yellow-500 focus:ring-0 focus:outline-none"
        />
        <span className="text-gray-600">All</span>
      </div>

      {categories.map((category) =>
        category.subcategories.map((sub) => (
          <div key={sub.id} className="flex items-center gap-2 mb-2 ml-1">
            <input
              type="checkbox"
              checked={selected === sub.name}
              onChange={() => handleToggle(sub.name)}
              className="form-checkbox rounded text-yellow-500 focus:ring-0 focus:outline-none"
            />
            <span className="text-gray-600">{sub.name}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default FilterCategory;
