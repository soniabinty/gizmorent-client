import React from 'react';
import { FaRegStar } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { LuUsers } from 'react-icons/lu';
import { MdLocationOn } from 'react-icons/md';
import CheckAvail from './CheckAvail';
import Description from './Description';
import Message from './Message';

const GadgetDetail = () => {
  return (
    <div className=''>

      <div className='md:grid md:grid-cols-3  md:mx-12 p-8'>

        <div className='md:col-span-2'>
          <img className='w-[700px] mx-auto' src={"https://i.ibb.co.com/W4kY8TcV/Adobe-Express-file-6.png"} alt="" />

        </div>

        <div className='col-span-1 space-y-5'>
{/* short  describe */}
          <div className='bg-sky-100 p-5 rounded-lg space-y-2 md:mt-14'>
            <div className='font-bold flex items-center gap-2'>
              <FaRegStar  className='text-xl' />
              <p>4.8</p>
              </div>
            <h2 className='text-3xl '>Canon EOS Revel T7</h2>
            <h6 className='font-bold'>$48.00/<span className='text-sm font-normal'>day</span></h6>
            <div className='flex gap-8'>


            <div className=' flex items-center gap-2 pr-8'>
            <MdLocationOn className='text-xl' />
              <p>Location :

Old BrookFeild Street, USA</p>
              </div>

              <div className='font-bold flex items-center gap-2'>
               <LuUsers className='text-xl' />
               <p>13</p>
               </div> 

            </div>
           
            

          </div>

          <div>
            <CheckAvail></CheckAvail>
          </div>
    

        </div>


      </div>
      
{/* description start */}


<div className='md:grid bg-sky-100 grid-cols-3 md:p-12 max-sm:py-4 '>

<div className='col-span-2 mx-6 '>
 
<Description></Description>

  




</div>

<div className='bg-white col-span-1 space-y-5 max-sm:mt-4 max-sm:pt-3 rounded-lg md:mr-8'>
{/* send messege */}


<Message></Message>
 

 

</div>


</div>


    </div>
  );
};

export default GadgetDetail;