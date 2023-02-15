import React from "react";
import food from '../assets/images/restauranfood.jpg';

const CallToAction = (props) => {
  return (
    <header>
          <div className="header-first-div">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned
            Mediterranean restaurant,
            focused on traditional
            recipes served with a modern
            twist.</p>
            <button>Reserve a Table</button>
          </div>
          <div className="header-second-div">
            <img src={food} alt=""/>
          </div>
    </header>
  )
};

export default CallToAction;
