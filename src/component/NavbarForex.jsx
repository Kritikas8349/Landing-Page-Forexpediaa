import React from "react";
import "./NavbarForex.css";


const NavbarForex = () => {
  return (
    <nav className="navbar-forex">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src="FPlogo.png" alt="Forexpediaa Logo" className="navbar-logo" />
        </div>
        <div className="navbar-right">
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarForex;
