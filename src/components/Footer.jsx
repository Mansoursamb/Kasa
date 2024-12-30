import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo-2.png";
function Footer() {
  return (
    <div className="bottom-menu">
      <img src={logo} alt="Kasa" className="lmjo-logo" />
      <p className="copy">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
