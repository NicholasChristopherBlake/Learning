import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className="navbar__link">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar__link">
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
