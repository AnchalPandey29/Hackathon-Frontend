import React, { useState } from "react";
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {

  return (
    <nav className="navbar navbar-expand-md navbar-dark text-white">
      {/* Container wrapper */}
      <div className="container">
        {/* Navbar brand */}
        <a className="navbar-brand" href="/main/home">
          <img
            src="\logo.png"
            height={55}
            alt="WorkConnect"
            loading="lazy"
          />
        </a>
        {/* Left-aligned links */}
        <div className="navbar-nav mr-auto">
          <a className="nav-link hover-overlay" href="/main/home"
            style={{ color: "black" }}>
            Home
          </a>
          <a className="nav-link hover-overlay" href="/main/aboutus"
            style={{ color: "black" }}>
            AboutUs
          </a>
          <a className="nav-link hover-overlay" href="/main/contact"
            style={{ color: "black" }}>
            Contact
          </a>
        </div>
        {/* Right-aligned links */}
        <ul className="navbar-nav ml-auto">

          <li className="nav-item">
            <Link to="/login" className="btn btn-outline-dark" style={{ backgroundColor: "#5ac1db", color: "white", marginLeft: "10px" }}>
              {/* Button content */}
            </Link>
            Signin
          
          <a className="btn btn-outline-dark" href="/startup/dashboard" style={{ backgroundColor: "#5ac1db", marginLeft: "10px", color: "white" }}>
            Your Dashboard
          </a>
        </li>
      </ul>
    </div>
      {/* Container wrapper */ }
    </nav >
  );
};

export default Header;
