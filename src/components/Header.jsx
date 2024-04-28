import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark text-white">
      <div className="container">
        <NavLink className="navbar-brand" to="/main/home">
          <img src="\logo.png" height={55} alt="WorkConnect" loading="lazy" />
        </NavLink>
        <div className="navbar-nav mr-auto">
          <NavLink
            to="/"
            className="nav-link hover-overlay"
            style={{ color: "black" }}
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className="nav-link hover-overlay"
            style={{ color: "black" }}
            activeClassName="active"
          >
            AboutUs
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-link hover-overlay"
            style={{ color: "black" }}
            activeClassName="active"
          >
            Contact
          </NavLink>
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              to="/login"
              className="btn btn-outline-dark"
              style={{
                backgroundColor: "#5ac1db",
                color: "white",
                marginLeft: "10px",
                marginTop: "20px",
              }}
            >
              Signin
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
