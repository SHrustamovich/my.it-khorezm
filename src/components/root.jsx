// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";
import Header from "./header";
import Menu from "./menu";

const Root = () => {
  return (
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
  );
};

export default Root;
