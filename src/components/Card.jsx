import React from "react";
import "../styles/Card.css";
import { Link } from "react-router-dom";
function Card() {
  return (
    <Link to="/Gallery">
      <div className="Card">
        <h3 className="card-titre">
          Titre de la <br></br>location
        </h3>
      </div>
    </Link>
  );
}

export default Card;
