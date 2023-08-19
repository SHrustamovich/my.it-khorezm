import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";
import Header from "./header";
import Menu from "./menu";

const Root = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div>
          <Menu />
        </div>
        <div className="wrapper-content">
          <Header />
          <div className="wrapper-content_inside">
            <Routes>
              {routes.map((el) => (
                <Route key={el.path} path={el.path} element={el.components} />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Root;
