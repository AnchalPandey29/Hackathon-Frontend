import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark text-white">
      {/* Container wrapper */}
      <div className="container">
        {/* Navbar brand */}
        <NavLink className="navbar-brand" to="/main/home">
          <img src="\logo.png" height={55} alt="WorkConnect" loading="lazy" />
        </NavLink>
        {/* Left-aligned links */}
        <div className="navbar-nav mr-auto">
          <NavLink
            to="/main/home"
            className="nav-link hover-overlay"
            style={{ color: "black" }}
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            to="/main/aboutus"
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
        {/* Right-aligned links */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              to="/login"
              className="btn btn-outline-dark"
              style={{
                backgroundColor: "#5ac1db",
                color: "white",
                marginLeft: "10px",
              }}
            >
             Signin
            </NavLink>
            
            <NavLink
              to="/startup/dashboard"
              className="btn btn-outline-dark"
              style={{
                backgroundColor: "#5ac1db",
                marginLeft: "10px",
                color: "white",
              }}
            >
              Your Dashboard
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Container wrapper */}
    </nav>
  );
};

export default Header;
