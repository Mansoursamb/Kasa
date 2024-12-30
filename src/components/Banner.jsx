import React from "react";
import "../styles/Banner.css";

function Banner({ imageSrc, text }) {
  return (
    <div className="banner">
      <img src={imageSrc} alt="Banner" className="lmj-hero" />
      <h1 className="Titre">{text}</h1>
    </div>
  );
}

export default Banner;
