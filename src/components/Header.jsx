import logo from "../assets/logo.png";
import React from "react";
import "../styles/Header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="top-menu">
      <img src={logo} alt="Kasa" className="lmj-logo" />
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/apropos"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          À propos
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
