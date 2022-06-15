import React from "react";
import Banner from "../components/Banner/Banner";
import RecentGames from "../components/RecentGames/RecentGames";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <RecentGames />
    </div>
  );
};

export default Home;
