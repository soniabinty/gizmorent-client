import React from "react";
import Checkbox from "./Checkbox";
import Details from "./Details";
import ReturnPage from "./return";
import Tracking from "./Tracking";
import { useLocation } from "react-router";

const TrackingPage = () => {
  const location = useLocation();
  const order = location.state?.order;
  console.log("Order from state:", order);
  return (
    <div className="space-y-10 max-w-7xl mx-auto my-10">
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="flex flex-col col-span-2 space-y-10 w-full mx-auto p-5">
          <Checkbox order={order} label="I agree to the terms and conditions" />
          <Details order={order} />
          <ReturnPage order={order} />
        </div>
        <div className="col-span-1 p-5 w-full mx-auto">
          <Tracking order={order} />
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;
