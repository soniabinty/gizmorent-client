import React from 'react';
import Card from '../../Shared/Card';

const TopRented = () => {


  const TopRentedGadgets = [
    {
      id: 1,
      name: "Canon EOS Revel T7",
      price: "$25",
      image: "https://i.ibb.co.com/RTN5YDY8/realistic-digital-photo-camera-tripod.png",
      category: "Camera",
      avail:"Available"
    },
    {
      id: 2,
      name: "iPhone 14 Pro Max",
      price: "$18",
      image: "https://i.ibb.co.com/wZw1bjwJ/Adobe-Express-file-7.png",
      category: "iPhone",
       avail:"Unavailable"
    },
    {
      id: 3,
      name: "Epson 4K Projector",
      price: "$42",
      image: "https://i.ibb.co.com/W4NGdTwz/Adobe-Express-file-4.png",
      category: "Projector",
       avail:"Available"
    },
    {
      id: 4,
      name: "Oculus Quest 3",
      price: "$35",
      image: "https://i.ibb.co.com/W4kY8TcV/Adobe-Express-file-6.png",
     category: "VR Headset",
      avail:"Available"
    },
  ];
  return (

    <div>


      <h2 className='text-4xl font-bold my-8'>Top Rented Gadgets</h2>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 mt-7'>
   
      {
        TopRentedGadgets.map((gadget) =>(
             <Card key={gadget.id} gadget={gadget}></Card>
        ))
      }
      
    </div>
    </div>
    
  );
};

export default TopRented;