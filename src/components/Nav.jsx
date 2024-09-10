import React from "react";
import logo from "../assets/icons/Logo.svg"
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
        <img src={logo} alt=""/>
        <ul>
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/about">About</Link></li>
          <li><Link className="link" to="/menu">Menu</Link></li>
          <li><Link className="link" to="/booking">Reservations</Link></li>
          <li><Link className="link" to="/order">Order Online</Link></li>
          <li><Link className="link" to="/login">Login</Link></li>
        </ul>
    </nav>
  )
};

export default Nav;
