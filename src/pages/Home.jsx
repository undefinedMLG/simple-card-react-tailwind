import React from "react";
import Feature from "../components/home/Feature";
import Hero from "../components/home/Hero";
import Profile from "../components/home/Profile";
import Stats from "../components/home/Stats";
import NavFo from "../layouts/NavFo";

const Home = () => {
  return (
    <NavFo>
      <Hero />
      <Feature />
      <Stats />

      <Profile />
    </NavFo>
  );
};

export default Home;
