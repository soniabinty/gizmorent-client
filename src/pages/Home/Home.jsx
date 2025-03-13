import React from "react";

import TopRented from "./TopRented";
import TopContributor from "./TopContributor";
import CategorySlider from "./CategorySlider";
import BookYourGadgets from "./BookYourGadgets";

const Home = () => {
  return (
    <div>
      <main className="mx-12">
        <CategorySlider></CategorySlider>
        <TopRented></TopRented>
        <TopContributor></TopContributor>
        <BookYourGadgets></BookYourGadgets>
      </main>
    </div>
  );
};

export default Home;
