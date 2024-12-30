import React from "react";
import "../styles/Galerie.css";
import works from "../assets/data.json";
import { Link } from "react-router-dom";
function Galerie() {
  return (
    <div className="galerie">
      {works.map((work) => (
        <Link to={`/apart/${work.id}`}>
          <div className="galerie-item" key={work.id}>
            <img src={work.cover} alt={work.title} />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Galerie;
