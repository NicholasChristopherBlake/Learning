import React, { useContext } from "react";
import { privateRoutes, publicRoutes } from "../router";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route
            element={<route.element />}
            path={route.path}
            key={route.path}
          />
        );
      })}
      <Route path="*" element={<Navigate to="/posts" replace={true} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to="/login" replace={true} />} />
    </Routes>
  );
};

export default AppRouter;
