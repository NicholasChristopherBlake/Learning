import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  BrowserRouter,
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Posts from "./pages/Posts.jsx";
import About from "./pages/About.jsx";
import PostIdPage from "./pages/PostIdPage.jsx";
import Login from "./pages/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
