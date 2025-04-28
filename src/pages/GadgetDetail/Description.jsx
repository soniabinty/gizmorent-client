import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';


const Description = ({gadgetDetails}) => { 
  const { description = '', specifications = [], features = [] } = gadgetDetails || {};

  return (
    <div className='space-y-6'>

     
        <p className='text-sm text-gray-600'>{description}
        </p>
        
        <h6 className="font-bold text-Primary text-2xl">
              ${gadgetDetails.price || "48.00"}/
              <span className="text-sm font-normal">day</span>
            </h6>
 
      {/* specification */}
      <div className=''>
        <h2 className='text-md mb-3'>Specifications</h2>
     
      <div className='md:grid grid-cols-3 gap-2'>

        {
specifications.map((specification) =>
<div className='flex gap-2 items-center text-xs'>
        <IoMdCheckmarkCircleOutline  className='text-xl text-Primary'/>
        <h4>{specification}</h4>
        </div>)
        }
    
      </div>
      </div>

      {/*feature  */}

      <div className=''>
        <h2 className='text-md mb-3'>Features</h2>
        <div className='divider'></div>
      <div className='md:grid grid-cols-3 gap-2'>
   
      {
features.map((feature) =>
<div className='flex gap-2 items-center text-xs'>
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