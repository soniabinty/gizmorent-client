import { use, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const NavCategory = () => {
  // const activeStyle = "font-semibold text-Primary";

  // Category Data with Products
  // const categories = [
  //   {
  //     name: "Cell Phones & Tablets",
  //     to: "/cell-phones-tablets",
  //     products: [
  //       { name: "Smartphones", to: "/smartphones" },
  //       { name: "Tablets", to: "/tablets" },
  //       { name: "Accessories", to: "/phone-accessories" },
  //     ],
  //   },
  //   {
  //     name: "Computers",
  //     to: "/computers",
  //     products: [
  //       { name: "Laptops", to: "/laptops" },
  //       { name: "Desktops", to: "/desktops" },
  //       { name: "Monitors", to: "/monitors" },
  //       { name: "Accessories", to: "/computer-accessories" },
  //     ],
  //   },
  //   {
  //     name: "Cameras",
  //     to: "/cameras",
  //     products: [
  //       { name: "DSLR Cameras", to: "/dslr-cameras" },
  //       { name: "Mirrorless Cameras", to: "/mirrorless-cameras" },
  //       { name: "Action Cameras", to: "/action-cameras" },
  //       { name: "Lenses", to: "/camera-lenses" },
  //     ],
  //   },
  //   {
  //     name: "Gaming & VR",
  //     to: "/gaming-vr",
  //     products: [
  //       { name: "Gaming Consoles", to: "/gaming-consoles" },
  //       { name: "VR Headsets", to: "/vr-headsets" },
  //       { name: "Gaming Accessories", to: "/gaming-accessories" },
  //     ],
  //   },
  //   {
  //     name: "Audio & Music",
  //     to: "/audio-music",
  //     products: [
  //       { name: "Headphones", to: "/headphones" },
  //       { name: "Speakers", to: "/speakers" },
  //       { name: "Microphones", to: "/microphones" },
  //     ],
  //   },
  //   {
  //     name: "Wearables",
  //     to: "/wearables",
  //     products: [
  //       { name: "Smartwatches", to: "/smartwatches" },
  //       { name: "Fitness Trackers", to: "/fitness-trackers" },
  //       { name: "Smart Glasses", to: "/smart-glasses" },
  //     ],
  //   },
  //   {
  //     name: "Computers",
  //     to: "/computers",
  //     products: [
  //       { name: "Laptops", to: "/laptops" },
  //       { name: "Desktops", to: "/desktops" },
  //       { name: "Monitors", to: "/monitors" },
  //       { name: "Accessories", to: "/computer-accessories" },
  //     ],
  //   },
  //   {
  //     name: "Cameras",
  //     to: "/cameras",
  //     products: [
  //       { name: "DSLR Cameras", to: "/dslr-cameras" },
  //       { name: "Mirrorless Cameras", to: "/mirrorless-cameras" },
  //       { name: "Action Cameras", to: "/action-cameras" },
  //       { name: "Lenses", to: "/camera-lenses" },
  //     ],
  //   },
  //   {
  //     name: "Gaming & VR",
  //     to: "/gaming-vr",
  //     products: [
  //       { name: "Gaming Consoles", to: "/gaming-consoles" },
  //       { name: "VR Headsets", to: "/vr-headsets" },
  //       { name: "Gaming Accessories", to: "/gaming-accessories" },
  //     ],
  //   },
  // ];
  const [categories, setCategories] = useState([]);
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
  }, [categories]);
  return (
    <div className="max-w-7xl mx-auto hidden lg:flex mb-2 px-6">
      <ul className="flex text-sm gap-5">
        {categories.map((category) => (
          <li className="font-bold relative group" key={category.id}>
            <NavLink>{category.name}</NavLink>
            {/* Dropdown for Products */}
            {category.subcategories && (
              <ul className="absolute mx-auto hidden group-hover:block  bg-white shadow-lg rounded-lg  p-2 space-y-2 min-w-[200px] z-50">
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory.id}>
                    <NavLink className="block px-2 py-1 text-gray-700 hover:bg-gray-100 rounded-md">
                      {subcategory.name}
                    </NavLink>
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
