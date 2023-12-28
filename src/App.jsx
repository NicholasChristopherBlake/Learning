import React from "react";
import "./styles/App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
