import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavLink exact to="/" activeClassName="active">
        Forside
      </NavLink>
      <NavLink to="/workouts" activeClassName="active">
        Træningsplaner
      </NavLink>
    </nav>
  );
};

export default NavBar;
