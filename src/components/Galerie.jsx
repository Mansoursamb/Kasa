import React from "react";
import "../styles/Galerie.css";
import works from "../assets/data.json";
import { Link } from "react-router-dom";

function Galerie() {
  return (
    <div className="galerie">
      {works.map((work) => (
        <Link to={`/apart/${work.id}`} key={work.id}>
          <div className="galerie-item">
            <img src={work.cover} alt={work.title} />
            <h2 className="apart-title">{work.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Galerie;
