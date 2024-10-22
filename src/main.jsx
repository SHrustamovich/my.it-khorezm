import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Root from "./components/root.jsx";
import "./assets/style/main.scss";
import LoginPage from "./pages/login/index.jsx";
import UserProvider from "./context/userContext";
import CheckUser from "./pages/check";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <UserProvider>
      <CheckUser />
    </UserProvider> */}
    <Root/>
  </BrowserRouter>
);
