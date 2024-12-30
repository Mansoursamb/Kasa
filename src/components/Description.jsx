import React from "react";
import "../styles/Description.css";
function Description({ titre, text }) {
  return (
    <div className="desc">
      <div className="description">
        <h3 className="titre">{titre}</h3>
        <i className="fa-solid fa-chevron-up"></i>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="descriptif">
        <p className="text">{text}</p>
      </div>
    </div>
  );
}

export default Description;
