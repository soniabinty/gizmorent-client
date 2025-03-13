import React from "react";
import CategorySlider from "./Categories";
import TopRented from "./TopRented";
import TopContributor from "./TopContributor";
import AboutGizmoRent from "./AboutGizmoRent";
import Login from "../Login/Login";

const Home = () => {
  return (
    <div>
      <main className="max-w-7xl mx-auto space-y-12">
      
        <CategorySlider></CategorySlider>
        <TopRented></TopRented>
        <TopContributor></TopContributor>
        <AboutGizmoRent></AboutGizmoRent>
      </main>
    </div>
  );
};

export default Home;
