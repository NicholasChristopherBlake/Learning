import Image from "next/image";
import React from "react";
import logo from "@/shared/assets/logo.png";

const Footer = () => {
  return (
    <footer className=" pt-10 bg-primaryDark">
      <div className="flex justify-around ">
        <nav>
          <h2>Menu</h2>
          <ul>
            <li>Movies</li>
            <li>Series</li>
            <li>Collections</li>
            <li>Actors</li>
          </ul>
        </nav>
        <div>
          <h2>Support</h2>
          <p>support@something.kz</p>
        </div>
        <div>
          <h2>Subscribe</h2>
          <p>Icons</p>
        </div>
        <div>
          <h2>Mobile</h2>
          <h3>Download PWA</h3>
        </div>
        <div>
          <h2>Made by @ 2023</h2>
          <Image
            src={logo}
            alt="logo"
            width={200}
            height={100}
            className="w-auto h-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
