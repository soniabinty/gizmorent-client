import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { MdBattery4Bar, MdOutlineCastConnected, MdOutlineEventNote, MdOutlineScreenshotMonitor, MdOutlineSdStorage, MdOutlineSensors } from 'react-icons/md';

const Description = () => { 
  return (
    <div className='space-y-6'>

      <div className='bg-white rounded-lg p-6'>
        <h2 className='text-2xl'>Description</h2>
        <div className='divider'></div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure beatae assumenda maxime quibusdam aperiam dolorum, fugiat ex molestias aut. Omnis, alias dolores eius vel sunt fuga libero praesentium odio eveniet!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure beatae assumenda maxime quibusdam aperiam dolorum, fugiat ex molestias aut. Omnis, alias dolores eius vel sunt 
        </p>

      </div>
      {/* specification */}
      <div className='bg-white rounded-lg p-6'>
        <h2 className='text-2xl'>Specifications</h2>
        <div className='divider'></div>
      <div className='md:grid grid-cols-3 gap-5'>
        <div className='flex gap-2 items-center'>
        <MdOutlineEventNote  className='text-3xl text-Primary'/>
        <h4>Model : <span>wisdom window winner</span></h4>
        </div>

        <div className='flex gap-2 items-center'>
        <MdOutlineCastConnected  className='text-3xl text-Primary'/>
        <h4> Connectivity & Ports : <span>Wi-Fi & Bluetooth</span></h4>
        </div>

        <div className='flex gap-2 items-center'>
        <MdOutlineScreenshotMonitor  className='text-3xl text-Primary'/>
        <h4>Display & Viewfinder: <span>LCD Screen</span></h4>
        </div>


        <div className='flex gap-2 items-center'>
        <MdOutlineSdStorage  className='text-3xl text-Primary'/>
        <h4>Storage: <span>Dual SD Card Slots</span></h4>
        </div>


        <div className='flex gap-2 items-center'>
        <MdBattery4Bar  className='text-4xl text-Primary'/>
        <h4>Battery Life: <span> Approx. 580 shots per charge</span></h4>
        </div>

        <div className='flex gap-2 items-center'>
        <MdOutlineSensors  className='text-4xl text-Primary'/>
        <h4>Sensor & Image Processor: <span>DIGIC X Processor</span></h4>
        </div>

      </div>
      </div>

      {/*feature  */}

      <div className='bg-white rounded-lg p-6'>
        <h2 className='text-2xl'>Features</h2>
        <div className='divider'></div>
      <div className='md:grid grid-cols-3 gap-5'>
        <div className='flex gap-2 items-center'>
        <IoMdCheckmarkCircleOutline  className='text-xl text-Primary'/>
        <h4>High-Resolution Sensor</h4>
        </div>

        <div className='flex gap-2 items-center'>
        <IoMdCheckmarkCircleOutline  className='text-xl text-Primary'/>
        <h4>Advanced Autofocus</h4>
        </div>

        <div className='flex gap-2 items-center'>
        <IoMdCheckmarkCircleOutline   className='text-xl text-Primary'/>
        <h4>4K Video Recording</h4>
        </div>


        <div className='flex gap-2 items-center'>
        <IoMdCheckmarkCircleOutline  className='text-xl text-Primary'/>
        <h4> High-Speed Shooting</h4>
        </div>


        <div className='flex gap-2 items-center'>
        <IoMdCheckmarkCircleOutline  className='text-xl text-Primary'/>
        <h4> In-Body Image Stabilization (IBIS)</h4>
        </div>

        <div className='flex gap-2 items-center'>
        <IoMdCheckmarkCircleOutline  className='text-xl text-Primary'/>
        <h4>Vari-Angle LCD Touchscreen</h4>
        </div>

        <div className='flex gap-2 items-center'>
        <IoMdCheckmarkCircleOutline  className='text-xl text-Primary'/>
        <h4> High-Speed Shooting</h4>
        </div>


        <div className='flex gap-2 items-center'>
        <IoMdCheckmarkCircleOutline  className='text-xl text-Primary'/>
        <h4> In-Body Image Stabilization (IBIS)</h4>
        </div>

        <div className='flex gap-2 items-center'>
        <IoMdCheckmarkCircleOutline  className='text-xl text-Primary'/>
        <h4>Vari-Angle LCD Touchscreen</h4>
        </div>

      </div>
      </div>
      
    </div>
  );
};

export default Description;