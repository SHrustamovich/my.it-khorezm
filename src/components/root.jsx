import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";
import Header from "./header";
import Menu from "./menu";
import LoginPage from "@/pages/login";
import clsx from "clsx";

const Root = () => {
  const [user, setUser] = useState(true);

  return user ? (
    <div className="wrapper">
      <div>
        <Menu />
      </div>
      <div className="wrapper-content">
        <Header />
        <div className="wrapper-content_inside">
          <div className="container">
            <Routes>
              {routes.map((el) => (
                <Route
                  key={el.path}
                  path={el.path}
                  element={el.components}
                  className={clsx(`${!el.visible && "hidden"}`)}
                />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <LoginPage />
  );
};

export default Root;
