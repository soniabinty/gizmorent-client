import React from "react";

import TopRented from "./TopRented";
import TopContributor from "./TopContributor";
import CategorySlider from "./CategorySlider";
import BookYourGadgets from "./BookYourGadgets";
import AboutGizmoRent from "./AboutGizmoRent";

const Home = () => {
  return (
    <div>
      <main className="md:mx-12">
        <CategorySlider></CategorySlider>
        <TopRented></TopRented>
        <TopContributor></TopContributor>
        <BookYourGadgets></BookYourGadgets>
        <AboutGizmoRent></AboutGizmoRent>
      </main>
    </div>
  );
};

export default Home;
