import React from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm  from './CheckOutForm'

const stripePromise = loadStripe(import.meta.env.VITE_publishable_key);

const creditPayment = () => {

 

 
  return (
    <div className="md:p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Pay for Coins</h2>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default creditPayment;