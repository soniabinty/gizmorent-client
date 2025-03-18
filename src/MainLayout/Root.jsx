import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import NavCategory from "../Shared/NavCategory";

const Root = () => {
  return (
    <div className="font-sans">
      <nav>
        <Navbar />
        
       <NavCategory></NavCategory>
      </nav >
     
      <div className="">
        <Outlet></Outlet>
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
