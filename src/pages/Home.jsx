import React from "react";
import Banner from "../components/Banner";
import Information from "../components/Information";
import Offer from "../components/Offer";
import NewArrivals from "../components/NewArrivals";

const Home = () => {
  return (
    <div>
      <Banner />
      <Information />
      <Offer />
      <NewArrivals />
    </div>
  );
};

export default Home;
