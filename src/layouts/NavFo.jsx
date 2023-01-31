import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const NavFo = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default NavFo;
