import React from "react";
import Navbar from "./Navbar";
import PopularSlider from "./PopularSlider";
import TrendingSlider from "./TrendingSlider";
const Home = () => {
  return (
    <>
      <Navbar />
      <PopularSlider />
      <TrendingSlider />
    </>
  );
};

export default Home;
