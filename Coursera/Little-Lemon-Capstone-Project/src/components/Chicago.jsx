import React from "react";
import photoA from '../assets/images/Mario and Adrian A.jpg'
import photoB from '../assets/images/Mario and Adrian b.jpg'

const Chicago = (props) => {
  return (
    <div className="story">
      <div className="left-side">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="right-side">
        <img id="photoA" src={photoA} alt=""/>
        <img id="photoB" src={photoB} alt=""/>
      </div>
    </div>
  )
};

export default Chicago;
