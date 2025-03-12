import { useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import defaultProfilePicture from "../assets/defaultProfilePicture.jpg";

const Navbar = () => {
    const user = null; // Default: No authentication context
    const signOutUser = () => console.log("User signed out");

    const [activeTab, setActiveTab] = useState("register");
    const activeStyle = "font-semibold text-primary dark:text-primary ";



    const links = (
        <>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? activeStyle : "")}>Home</NavLink></li>
            <li><NavLink to="/rentals" className={({ isActive }) => (isActive ? activeStyle : "")}>Rentals</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => (isActive ? activeStyle : "")}>Contact</NavLink></li>
            <li><NavLink to="/about-us" className={({ isActive }) => (isActive ? activeStyle : "")}>About</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 z-50">
            <div className="navbar-start">
                <div className="text-2xl font-bold text-primary dark:text-primary">
                    <NavLink to="/">GizmoRent</NavLink>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-3 px-1">{links}</ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-12 rounded-full">
                                <img src={user?.photoURL || defaultProfilePicture} alt="Profile" />
                            </div>
                        </label>
                        <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-80 z-50">
                            <li className="flex items-center justify-between">
                                <div className="flex items-center flex-row">
                                    <img src={user?.photoURL || defaultProfilePicture} alt="Profile" className="w-12 h-12 rounded-full" />
                                    <div className="ml-3">
                                        <p className="font-bold">{user?.displayName || "User Name"}</p>
                                        <a href="#" className="text-sm text-blue-500">See your profile</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a onClick={signOutUser} className="flex items-center gap-2 cursor-pointer">
                                    <IoMdLogOut className="text-2xl" />
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <Link to="/login" className={`px-6 py-2 rounded-lg text-sm font-normal ${activeTab === "login" ? "bg-primary text-white font-semibold" : "text-cyan-900"}`} onClick={() => setActiveTab("login")}>
                            Sign In
                        </Link>
                        <Link to="/register" className={`px-6 py-2 rounded-lg text-sm font-normal ${activeTab === "register" ? "bg-primary text-white font-semibold" : "text-cyan-900"}`} onClick={() => setActiveTab("register")}>
                            Get Started
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;