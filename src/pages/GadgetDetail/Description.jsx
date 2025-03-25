import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';


const Description = ({gadgetDetails}) => { 
  const { description = '', specifications = [], features = [] } = gadgetDetails || {};

  return (
    <div className='space-y-6'>

      <div className='bg-white rounded-lg p-6'>
        <h2 className='text-2xl'>Description</h2>
        <div className='divider'></div>
        <p>{description}
        </p>

      </div>
      {/* specification */}
      <div className='bg-white rounded-lg p-6'>
        <h2 className='text-2xl'>Specifications</h2>
        <div className='divider'></div>
      <div className='md:grid grid-cols-3 gap-5'>

        {
specifications.map((specification) =>
<div className='flex gap-2 items-center'>
        <IoMdCheckmarkCircleOutline  className='text-xl text-Primary'/>
        <h4>{specification}</h4>
        </div>)
        }
    
      </div>
      </div>

      {/*feature  */}

      <div className='bg-white rounded-lg p-6'>
        <h2 className='text-2xl'>Features</h2>
        <div className='divider'></div>
      <div className='md:grid grid-cols-3 gap-5'>
   
      {
features.map((feature) =>
<div className='flex gap-2 items-center'>
        <IoMdCheckmarkCircleOutline  className='text-xl text-Primary'/>
        <h4>{feature}</h4>
        </div>)
        }

      </div>
      </div>
      
    </div>
  );
};

export default Description;