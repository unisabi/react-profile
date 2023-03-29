import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
function Navbar(props) {
  return (
    <div className="navbar--container">
      <div className="navbar--item">
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
          to="/"
        >
          About Me
        </NavLink>
      </div>
      <div className="navbar--item">
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
          to="/portfolio"
        >
          Portfolio
        </NavLink>
      </div>
      <div className="navbar--item">
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
      <div className="navbar--item">
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
          to="/resume"
        >
          Resume
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
