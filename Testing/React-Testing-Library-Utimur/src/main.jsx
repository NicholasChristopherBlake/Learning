import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createReduxStore } from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={createReduxStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

