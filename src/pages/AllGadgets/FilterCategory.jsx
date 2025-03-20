import React from 'react';

const FilterCategory = () => {
  return (
    <div className=''>
      <h3 className='text-xl font-semibold'>Filter By Category</h3>
      <div className='my-5 space-y-4'>
         <div className='flex items-center gap-3'>
    <input type="radio" name="radio-2" className="radio focus:text-Primary radio-xs"  />
      <p className='font-semibold text-gray-500'>Laptop</p>

    </div>

    <div className='flex items-center gap-3'>
    <input type="radio" name="radio-2" className="radio focus:text-Primary radio-xs"  />
      <p className='font-semibold text-gray-500'>Camera</p>

    </div>


    <div className='flex items-center gap-3'>
    <input type="radio" name="radio-2" className="radio focus:text-Primary radio-xs"  />
      <p className='font-semibold text-gray-500'>Gaming & VR</p>

    </div>



    <div className='flex items-center gap-3'>
    <input type="radio" name="radio-2" className="radio focus:text-Primary radio-xs"  />
      <p className='font-semibold text-gray-500'>Audio & Music</p>

    </div>


    <div className='flex items-center gap-3'>
    <input type="radio" name="radio-2" className="radio focus:text-Primary radio-xs"  />
      <p className='font-semibold text-gray-500'>Wareables</p>

    </div>

    
      </div>
   
      
    </div>
  );
};

export default FilterCategory;