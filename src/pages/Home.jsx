import React from "react";
import Faq from "../components/Faq";
import Banner from "../components/home/Banner";
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
      <Banner />
      <Stats />
      <Profile />
      <Faq />
    </NavFo>
  );
};

export default Home;
