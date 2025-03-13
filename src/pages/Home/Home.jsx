import React from "react";
import CategorySlider from "./Categories";
import TopRented from "./TopRented";
import TopContributor from "./TopContributor";
import SimpleSlider from "./SimpleSlider";

const Home = () => {
  return (
    <div>
      <main className="mx-12">
        <SimpleSlider></SimpleSlider>
        <CategorySlider></CategorySlider>
        <TopRented></TopRented>
        <TopContributor></TopContributor>
      </main>
    </div>
  );
};

export default Home;
