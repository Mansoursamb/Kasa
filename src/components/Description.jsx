import React, { useState } from "react";
import "../styles/Description.css";

function Description({ titre, text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="desc">
      <div className="description" onClick={toggleDescription}>
        <h3 className="titre">{titre}</h3>
        {isExpanded ? (
          <i className="fa-solid fa-chevron-up"></i>
        ) : (
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </div>
      <div className={`descriptif ${isExpanded ? "visible" : ""}`}>
        <div> className="text"{text}</div>
      </div>
    </div>
  );
}

export default Description;
