import React, { useCallback, useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import Details from "./Details";
import ReturnPage from "./return";
import Tracking from "./Tracking";
import { useLocation } from "react-router";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const TrackingPage = () => {
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const [order, setOrder] = useState(location.state?.order || null);

  const fetchOrder = async () => {
    if (order?._id) {
      try {
        const res = await axiosPublic.get(`/orders/${order._id}`);
        setOrder(res.data); // Update order with fresh data
      } catch (error) {
        console.error("Failed to fetch order:", error);
      }
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [order?._id, axiosPublic]);

  if (!order) {
    return <div>Loading order...</div>;
  }
  return (
    <div className="space-y-10 max-w-7xl mx-auto my-10">
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="flex flex-col col-span-2 space-y-10 w-full mx-auto p-5">
          <Checkbox order={order} label="I agree to the terms and conditions" />
          <Details order={order} />
          <ReturnPage order={order} fetchOrder={fetchOrder} />
        </div>
        <div className="col-span-1 p-5 w-full mx-auto">
          <Tracking order={order} />
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;
