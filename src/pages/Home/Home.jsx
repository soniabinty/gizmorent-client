import React from "react";

import TopRented from "./TopRented";
import TopContributor from "./TopContributor";

const Home = () => {
  return (
    <div>
      <main className="mx-12 space-y-8">
        <TopRented></TopRented>
        <TopContributor></TopContributor>
      </main>
    </div>
  );
};

export default Home;
