import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { BsFillHouseAddFill, BsGraphUp } from "react-icons/bs";

import { Link, NavLink } from "react-router-dom";
import { MdHomeWork } from "react-icons/md";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <h2 className="text-xl  text-Primary font-semibold">GizmoRent</h2>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <Link to="/">
              <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-lime-100 mx-auto">
                <h2 className="text-xl text-Primary font-semibold">
                  GizmoRent
                </h2>
              </div>
            </Link>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {/*  Menu Items */}

              <NavLink to="/dashboard/add-gadget">
                <p className="flex items-center gap-2 px-6 py-3 font-semibold">
                  <BsFillHouseAddFill></BsFillHouseAddFill> Add Gadget
                </p>
              </NavLink>
              <NavLink to="/dashboard/my-gadget">
                <p className="flex items-center gap-2 px-6 py-3 font-semibold">
                  <MdHomeWork></MdHomeWork> My Gadget
                </p>
              </NavLink>
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* profile */}
          <button
            // onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
