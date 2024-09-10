import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const signout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="navbar">
      <ul className="navbar__list">
        <li className="navbar__link">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar__link">
          <Link to="/posts">Posts</Link>
        </li>
        <li className="navbar__link">
          {isAuth ? (
            <MyButton onClick={signout}>Sign Out</MyButton>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
