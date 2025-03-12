import React from "react";
import CategorySlider from "./Categories";

import TopRented from "./TopRented";

const Home = () => {
  return (
    <div>
      <main className="mx-12">
        <CategorySlider></CategorySlider>
        <TopRented></TopRented>
      </main>
    </div>
  );
};

export default Home;
