import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="container w-11/12 lg:w-9/12 my-0 mx-auto pb-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
