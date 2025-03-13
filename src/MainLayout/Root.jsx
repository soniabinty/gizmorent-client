import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Componants/Footer';

const Root = () => {
  return (
    <div >
      <nav className="w-11/12 mx-auto py-1 ">
        <Navbar
        />
      </nav>
      <div className='max-w-[1440px] mx-auto'>
        <Outlet></Outlet>
      </div>
        <Footer></Footer>
    </div >
  );
};

export default Root;