import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { data } from "./menuSide";

function Direction() {
  return (
    <BrowserRouter>
      <Routes>
        {data.map((el) => {
          return (
              <Route path={el.path} element={el.page} />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default Direction;
