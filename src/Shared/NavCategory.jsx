import { NavLink } from "react-router-dom";
const NavCategory = () => {
  const activeStyle = "font-semibold text-Primary";

  // Category Data with Products
  const categories = [
    {
      name: "Cell Phones & Tablets",
      to: "/cell-phones-tablets",
      products: [
        { name: "Smartphones", to: "/smartphones" },
        { name: "Tablets", to: "/tablets" },
        { name: "Accessories", to: "/phone-accessories" },
      ],
    },
    {
      name: "Computers",
      to: "/computers",
      products: [
        { name: "Laptops", to: "/laptops" },
        { name: "Desktops", to: "/desktops" },
        { name: "Monitors", to: "/monitors" },
        { name: "Accessories", to: "/computer-accessories" },
      ],
    },
    {
      name: "Cameras",
      to: "/cameras",
      products: [
        { name: "DSLR Cameras", to: "/dslr-cameras" },
        { name: "Mirrorless Cameras", to: "/mirrorless-cameras" },
        { name: "Action Cameras", to: "/action-cameras" },
        { name: "Lenses", to: "/camera-lenses" },
      ],
    },
    {
      name: "Gaming & VR",
      to: "/gaming-vr",
      products: [
        { name: "Gaming Consoles", to: "/gaming-consoles" },
        { name: "VR Headsets", to: "/vr-headsets" },
        { name: "Gaming Accessories", to: "/gaming-accessories" },
      ],
    },
    {
      name: "Audio & Music",
      to: "/audio-music",
      products: [
        { name: "Headphones", to: "/headphones" },
        { name: "Speakers", to: "/speakers" },
        { name: "Microphones", to: "/microphones" },
      ],
    },
    {
      name: "Wearables",
      to: "/wearables",
      products: [
        { name: "Smartwatches", to: "/smartwatches" },
        { name: "Fitness Trackers", to: "/fitness-trackers" },
        { name: "Smart Glasses", to: "/smart-glasses" },
      ],
    },
  ];
  return (
    <div className="max-w-7xl mx-auto hidden lg:flex py-2 px-6">
      <ul className="flex text-sm gap-6">
        {categories.map((category, index) => (
          <li className="font-bold relative group" key={index}>
            <NavLink
              to={category.to}
              className={({ isActive }) =>
                isActive ? activeStyle : "hover:text-Primary"
              }
            >
              {category.name}
            </NavLink>
            {/* Dropdown for Products */}
            {category.products && (
              <ul className="absolute mx-auto hidden group-hover:block mt-8 bg-white shadow-lg rounded-lg  p-2 space-y-2 min-w-[200px] z-50">
                {category.products.map((product, productIndex) => (
                  <li key={productIndex}>
                    <NavLink
                      to={product.to}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      {product.name}
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
