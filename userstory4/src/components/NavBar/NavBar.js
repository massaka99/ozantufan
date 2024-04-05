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
      <NavLink to="/bmi-calculator" activeClassName="active">
        BMI Beregner
      </NavLink>
      <NavLink to="/diet-plans" activeClassName="active">
        Kostplaner
      </NavLink>
      <NavLink to="/progress-tracking" activeClassName="active">
        Fremskridt
      </NavLink>
      <NavLink to="/personal-profile" activeClassName="active">
        Personlig Profil
      </NavLink>
    </nav>
  );
};

export default NavBar;
