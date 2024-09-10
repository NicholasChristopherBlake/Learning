import React, {useContext} from "react"
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from "../context";
import { publicRoutes, privateRoutes } from "../router/routes";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <Loader/>
  }

  return (
    isAuth
      ? <Routes>
          {privateRoutes.map(route => 
            <Route 
            element={route.element} 
            path={route.path}
            key={route.path}
            />
          )}
          <Route element={<Navigate to="/posts" replace/>} path="/*" />
          {/* <Route element={<Navigate to="/error" replace/>} path="/*" /> */}
        </Routes>
      : <Routes>
          {publicRoutes.map(route => 
            <Route 
            element={route.element} 
            path={route.path}
            key={route.path}
            />
          )}
          <Route element={<Navigate to="/login" replace/>} path="/*" />
        </Routes>
  )
};

export default AppRouter;
