import React from "react"
import Booking from "../Booking";
import Footer from "../Footer";
import Nav from "../Nav";

const BookingPage = (props) => {

  return (
    <>
      <Nav />
      <Booking
        availableTimes={props.availableTimes}
        dispatch={props.dispatch}
        submitForm={props.submitForm}
      />
      <Footer />
    </>
  )
};

export default BookingPage;
