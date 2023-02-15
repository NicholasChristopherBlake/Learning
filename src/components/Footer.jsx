import React from "react";
import logo2 from "../assets/images/Logo2.PNG"

const Footer = () => {
  return (
    <footer>
        <img src={logo2} alt=""/>
        <ul> <p className="bottom-nav-title">Doormat Navigation</p>
            <li><a href=""></a>Home</li>
            <li><a href=""></a>About</li>
            <li><a href=""></a>Menu</li>
            <li><a href=""></a>Reservations</li>
            <li><a href=""></a>Order Online</li>
            <li><a href=""></a>Login</li>
        </ul>
        <ul> <p className="bottom-nav-title">Contact</p>
            <li><a href=""></a>Address</li>
            <li><a href=""></a>Phone number</li>
            <li><a href=""></a>E-mail</li>
          </ul>
        <ul> <p className="bottom-nav-title">Social Media Links</p>
            <li><a href=""></a>Address</li>
            <li><a href=""></a>Phone number</li>
            <li><a href=""></a>E-mail</li>
        </ul>
      </footer>
  )
};

export default Footer;
