import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaHeart, FaRegStar } from 'react-icons/fa';
import { LuUsers } from 'react-icons/lu';
import { MdOutlineEventNote } from 'react-icons/md';
import { Link } from 'react-router';

const Card = ({gadget}) => {
  
  return (

    <div className='flex flex-grow'>
        <div className='bg-gray-100 rounded-lg p-4 flex flex-col grow h-full'>

<div className='flex justify-between items-center'>
<div>
  <h4 className='text-2xl font-bold'>{gadget.name}</h4>
  <p>{gadget.category}</p>
</div>

<div>
<FaHeart className='text-xl text-red-600 mb-4' />
</div>

</div>

<div className='flex-grow flex items-center justify-center'>
  <img className='w-50 mx-auto ' src={gadget.image} alt="" />
</div>


<div className='flex gap-7 my-3'>

  <div className='font-bold flex items-center gap-2'>
  <FaRegStar  className='text-xl' />
  <p>4.8</p>
  </div>

  <div className='font-bold   flex items-center gap-2'>
  <MdOutlineEventNote  className='text-xl' />
  <p>Available</p>
  </div>


  <div className='font-bold flex items-center gap-2'>
  <LuUsers className='text-xl' />
  <p>13</p>
  </div>

</div>

<div className='flex justify-between items-center'>
  <h6 className='font-bold'>{gadget.price}.00/<span className='text-sm font-normal'>day</span></h6>
  <Link to={'/gadgetdetail'}>
  <button className='bg-Primary py-2 px-5 rounded-lg text-white font-bold'>
    Rent Now
  </button>
  </Link>

</div>

</div>
    </div>
  

    
  );
};

export default Card;