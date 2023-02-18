import React from "react"
import Footer from "../Footer";
import Nav from "../Nav";

const ConfirmedBooking = (props) => {
  return (
    <>
      <Nav />
        <h1 className="confirmed-booking">Thank you! Your booking has been confirmed!</h1>
      <Footer />
    </>
  )
};

export default ConfirmedBooking;
