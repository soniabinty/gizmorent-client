import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';


const Root = () => {
  return (
    <div className="font-sans">
      <nav>
        <Navbar
        />
      </nav >
      <div>
        <Outlet></Outlet>
      </div>
    </div >
  );
};

export default Root;