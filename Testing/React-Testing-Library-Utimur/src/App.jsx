import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import React from "react";
import UserDetailsPage from "./pages/UserDetailsPage";
import Users from "./components/users/Users";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar/Navbar";

function App() {
  // const [data, setData] = useState();
  // const [toggle, setToggle] = useState(false);
  // const [value, setValue] = useState("");

  // const onClick = () => {
  //   setToggle((prev) => !prev);
  // };
  // useEffect(() => {
  //   setTimeout(() => {
  //     setData({});
  //   }, 100);
  // }, []);
  // <h1 data-testid="value-elem">{value}</h1>
  //     {toggle === true && <div data-testid="toggle-elem">Toggle</div>}
  //     {data && <div style={{ color: "red" }}>Data</div>}
  //     <h1>Hello world</h1>
  //     <button data-testid="toggle-button" onClick={onClick}>
  //       Click me
  //     </button>
  //     <input
  //       type="text"
  //       placeholder="Some input"
  //       value={value}
  //       onChange={(e) => setValue(e.target.value)}
  //     />

  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;

