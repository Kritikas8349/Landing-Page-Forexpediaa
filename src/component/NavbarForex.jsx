import React from "react";
import "./NavbarForex.css";
import { Link } from "react-router-dom";


const NavbarForex = () => {
  return (
    <nav className="navbar-forex">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src="FPlogo.png" alt="Forexpediaa Logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
  <Link to="/about">
    <button className="nav-btn">About Us</button>
  </Link>
  <Link to="/contact">
    <button className="nav-btn">Contact Us</button>
  </Link>
</div>

      </div>
    </nav>
  );
};

export default NavbarForex;
