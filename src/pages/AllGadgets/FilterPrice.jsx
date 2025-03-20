import React from 'react';

const FilterPrice = () => {
  return (
    <div className='my-10'>
      <h3 className='text-xl font-semibold'>Sort By Price</h3>
      <div className='my-5 space-y-4'>
         <div className='flex items-center gap-3'>
    <input type="radio" name="radio-2" className="radio focus:text-Primary radio-xs"  />
      <p className='font-semibold text-gray-500'>Low</p>

    </div>

    <div className='flex items-center gap-3'>
    <input type="radio" name="radio-2" className="radio focus:text-Primary radio-xs"  />
      <p className='font-semibold text-gray-500'>Medium</p>

    </div>


    <div className='flex items-center gap-3'>
    <input type="radio" name="radio-2" className="radio focus:text-Primary radio-xs"  />
      <p className='font-semibold text-gray-500'>High</p>

    </div>



    
      </div>
   
      
    </div>
  );
};

export default FilterPrice;