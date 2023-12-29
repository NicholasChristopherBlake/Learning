import React, { useState } from "react";
import "./styles/App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <Navbar />
      <div id="detail">
        <AppRouter />
      </div>
    </>
  );
}
