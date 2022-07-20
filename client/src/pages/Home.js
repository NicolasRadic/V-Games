import React from "react";
import Banner from "../components/Banner/Banner";
import RecentGames from "../components/RecentGames/RecentGames";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <RecentGames />
      <Footer />
    </div>
  );
};

export default Home;
