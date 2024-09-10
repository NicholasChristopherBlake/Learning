import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context/index";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <Navbar />
      <div id="detail">
        <AppRouter />
      </div>
    </AuthContext.Provider>
  );
}
