import React from "react"
import CallToAction from "../CallToAction";
import Footer from "../Footer";
import Nav from "../Nav";
import Specials from "../Specials";

const Homepage = (props) => {
  return (
    <>
      <Nav />
      <CallToAction />
      <Specials />
      <Footer />
    </>
  )
};

export default Homepage;
