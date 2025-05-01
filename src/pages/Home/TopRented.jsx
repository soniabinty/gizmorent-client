import React, { useEffect, useState } from "react";
import Card from "../../Shared/Card";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const TopRented = () => {
  const [gadgets, setGadgets] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchTopGadgets = async () => {
      try {
        const res = await axiosPublic.get("/top-rented-gadgets");
        setGadgets(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTopGadgets();
  }, [axiosPublic]);
  console.log(gadgets);

  return (
    <div>



      <h2 className='text-2xl font-bold  '>Top Rented Gadgets</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 lg::gap-6 mt-7'>
   
      {
        gadgets.map((gadget) =>(
             <Card key={gadget.id} gadget={gadget}></Card>
        ))
      }
      
    </div>

    </div>
  );
};

export default TopRented;
