import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link data-testid="about-link" to="/about">
        About
      </Link>
      <Link data-testid="main-link" to="/">
        Main
      </Link>
      <Link data-testid="users-link" to="/users">
        Users
      </Link>
    </div>
  );
}
