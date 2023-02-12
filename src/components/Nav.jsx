import React from "react";
import logo from "../assets/icons/Logo.svg"

const Nav = () => {
  return (
    <nav>
        <img src={logo}/>
        <ul>
          <li><a href=""></a>Home</li>
          <li><a href=""></a>About</li>
          <li><a href=""></a>Menu</li>
          <li><a href=""></a>Reservations</li>
          <li><a href=""></a>Order Online</li>
          <li><a href=""></a>Login</li>
        </ul>
    </nav>
  )
};

export default Nav;
