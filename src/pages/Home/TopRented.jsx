import React, { useEffect, useState } from "react";
import Card from "../../Shared/Card";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Loading from "../../Shared/Loading";


const TopRented = () => {
  const [gadgets, setGadgets] = useState([]);
  const [loading, setLoading] = useState(true); 
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchTopGadgets = async () => {
      try {
        const res = await axiosPublic.get("/top-rented-gadgets");
        setGadgets(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); 
      }
    };
    fetchTopGadgets();
  }, [axiosPublic]);

  return (
    <div>
      <h2 className="text-4xl max-sm:text-3xl font-bold max-sm:px-4">
        Top Rented Gadgets
      </h2>

      {loading ? ( 
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-5 max-sm:px-4 gap-4 md:gap-6 mt-7">
          {gadgets.map((gadget) => (
            <Card key={gadget.id} gadget={gadget.gadgetDetails}></Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopRented;
