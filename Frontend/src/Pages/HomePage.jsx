import React from "react";
import CalculateContent from "../Components/HomePageComponents/CalculateContent/CalculateContent";
import Features from "../Components/HomePageComponents/MainFeatures/Features";
import Reviews from "../Components/HomePageComponents/Reviews/Reviews";

const HomePage = () => {
  return (
    <React.Fragment>
      <CalculateContent />
      <Features />
      <Reviews />
    </React.Fragment>
  );
};

export default HomePage;
