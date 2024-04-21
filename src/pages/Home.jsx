import React from "react";
import Banner from "../components/Banner";
import Information from "../components/Information";
import Offer from "../components/Offer";
import NewArrivals from "../components/NewArrivals";
import Bestseller from "../components/Bestseller";
import PoftheYear from "../components/PoftheYear";
import SpecialOffers from "../components/SpecialOffers";

const Home = () => {
  return (
    <div>
      <Banner />
      <Information />
      <Offer />
      <NewArrivals />
      <Bestseller />
      <PoftheYear />
      <SpecialOffers/>
    </div>
  );
};

export default Home;
