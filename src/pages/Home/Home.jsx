
import React from 'react';
import Testimonial from './Testimonial';
import React from "react";
import AboutGizmoRent from "./AboutGizmoRent";
import CategorySlider from "./Categories";
import RealTimeBooking from "./RealTimeBooking";
import TopContributor from "./TopContributor";
import TopRented from "./TopRented";

const Home = () => {
  return (
    <div>
      <main>
        <CategorySlider></CategorySlider>
        <TopRented></TopRented>
        <TopContributor></TopContributor>
        <AboutGizmoRent></AboutGizmoRent>
        <RealTimeBooking></RealTimeBooking>
        <Testimonial/>
      </main>
    </div>
  );
};

export default Home;
