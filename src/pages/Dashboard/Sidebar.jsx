import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { BsFillHouseAddFill } from "react-icons/bs";

import { MdHomeWork } from "react-icons/md";

import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
 

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 fixed w-full  flex justify-between md:hidden">
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
        className={`z-10 fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4  inset-y-0 left-0 transform ${isActive && "-translate-x-full"
          }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <Link to="/">
              <div className="w-full  px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-lime-100 mx-auto">
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
              {/* admin dash */}
              <NavLink to="/dashboard/adminhome">
                <p className="flex items-center gap-2 px-6 py-3 font-semibold">
                  <BsFillHouseAddFill></BsFillHouseAddFill> Home
                </p>
              </NavLink>
              <NavLink to="/dashboard/renterapprove">
                <p className="flex items-center gap-2 px-6 py-3 font-semibold">
                  <BsFillHouseAddFill></BsFillHouseAddFill> Renter Approve
                </p>
              </NavLink>
            </nav>
          </div>
        </div>

     
      </div>
    </>
  );
};

export default Sidebar;
