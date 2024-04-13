import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Header from "../Header";

const Rootlayout = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Outlet />
      <h1>footer</h1>
    </div>
  );
};

export default Rootlayout;
