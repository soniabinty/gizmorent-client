import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, fetchGadgets } from "../Redux/Feature/gadgetSlice";

const NavCategory = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.gadgets.filters);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/json/subCategories.json");
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryName) => {
    const updatedFilters = { ...filters, category: categoryName };
    dispatch(setFilters(updatedFilters));
    dispatch(fetchGadgets(updatedFilters));
    navigate(`/allgadgets`);
  };

  return (
    <div className="max-w-7xl mx-auto hidden lg:flex mb-2 px-6">
      <ul className="flex text-sm gap-5">
        {categories.map((category) => (
          <li className="font-bold relative group" key={category.id}>
            {/* When clicking on a parent category */}
            <button
              onClick={() => handleCategoryClick(category.name)}
              className="hover:underline"
            >
              {category.name}
            </button>

            {/* Dropdown for Subcategories */}
            {category.subcategories && (
              <ul className="absolute mx-auto hidden group-hover:block bg-white shadow-lg rounded-lg p-2 space-y-2 min-w-[200px] z-50">
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory.id}>
                    <button
                      onClick={() => handleCategoryClick(subcategory.name)}
                      className="block px-2 py-1 text-gray-700 hover:bg-gray-100 rounded-md w-full text-left"
                    >
                      {subcategory.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavCategory;
