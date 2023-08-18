import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Logo } from "../assets/icons";
import { menuData } from "../constants/menuSide";
import clsx from "clsx";

const Menu = () => {
  const location = useLocation();
  return (
    <div className="wrapper-menu">
      <Link to="/">
        <Logo />
      </Link>
      <div className="wrapper-menu_list">
        {menuData.map((item) => (
          <NavLink to={item.path}>
            <div
              className={clsx(
                "wrapper-menu_list__link",
                location.pathname == item.path && "active"
              )}
              key={item.id}
            >
              {item.icon}
              {item.label}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Menu;
