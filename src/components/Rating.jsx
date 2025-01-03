import React from "react";
import "../styles/Rating.css"; // Assurez-vous d'importer les styles

function Rating({ rating }) {
  return (
    <div className="rating">
      {Array.from({ length: 5 }).map((_rating, index) => (
        <span key={index}>
          <i
            className={`fa-solid fa-star ${
              index < Number(rating) ? "red-star" : "gray-star"
            }`}
          ></i>
        </span>
      ))}
    </div>
  );
}

export default Rating;
