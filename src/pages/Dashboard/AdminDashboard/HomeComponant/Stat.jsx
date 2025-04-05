import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { MdAttachMoney, MdOutlineBorderColor, MdOutlineProductionQuantityLimits } from 'react-icons/md';

const Stat = () => {
  return (
    <div className='md:flex gap-8 '>
      <div className='flex p-4 gap-6 items-center shadow-xl rounded-lg'>
        <div>  
           <h5 className='text-xl'>Total Products</h5>
          <h3 className='text-3xl font-bold'>76k+</h3>

        </div>
        <div className='bg-blue-400 rounded-full h-15 w-15 justify-center flex items-center'>
        <MdOutlineProductionQuantityLimits className='text-3xl text-white' />
        </div>

      </div>

      <div className='flex p-4 gap-6 items-center shadow-xl rounded-lg'>
        <div>  
           <h5 className='text-xl'>Total Orders</h5>
          <h3 className='text-3xl font-bold'>45k+</h3>

        </div>
        <div className='bg-purple-500 rounded-full h-15 w-15 justify-center flex items-center'>
        <MdOutlineBorderColor className='text-3xl text-white' />
        </div>

      </div>

      <div className='flex p-4 gap-6 items-center shadow-xl rounded-lg'>
        <div>  
           <h5 className='text-xl'>Total Revenue</h5>
          <h3 className='text-3xl font-bold'>36k+</h3>

        </div>
        <div className='bg-green-400 rounded-full h-15 w-15 justify-center flex items-center'>
        <MdAttachMoney  className='text-3xl text-white' />
        </div>

      </div>

      <div className='flex p-4 gap-6 items-center shadow-xl rounded-lg'>
        <div>  
           <h5 className='text-xl'>Total Users</h5>
          <h3 className='text-3xl font-bold'>67k+</h3>

        </div>
        <div className='bg-red-400 rounded-full h-15 w-15 justify-center flex items-center'>
        <FaUsers className='text-3xl text-white' />
        </div>

      </div>

      
    </div>
  );
};

export default Stat;