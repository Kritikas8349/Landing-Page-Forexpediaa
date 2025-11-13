import React, { useState } from "react";
import "./NavbarForex.css";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // hamburger and close icons

const NavbarForex = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-forex">
      <div className="navbar-container">
        {/* ---------- LEFT: Logo ---------- */}
        <div className="navbar-left">
          <img src="FPlogo.png" alt="Forexpediaa Logo" className="navbar-logo" />
        </div>

        {/* ---------- RIGHT: Menu ---------- */}
        <div className={`navbar-right ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <button className="nav-btn">Home</button>
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <button className="nav-btn">About Us</button>
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="nav-btn">Contact Us</button>
          </Link>
        </div>

        {/* ---------- Hamburger Button ---------- */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default NavbarForex;
