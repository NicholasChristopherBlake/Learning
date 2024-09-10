import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import Users from "../components/users/Users";
import UserDetailsPage from "../pages/UserDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";
import HelloPage from "../pages/HelloPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/hello" element={<HelloPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
