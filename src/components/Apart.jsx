import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Apart.css";
import works from "../assets/data.json";
import Rating from "./Rating";

function Apart() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const selectedWork = works.find((work) => work.id === id);

  // État pour suivre l'image courante
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!selectedWork) {
    return <div>Logement introuvable</div>;
  }

  const pictures = selectedWork.pictures;

  // Gestion des flèches
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div className="apart" key={selectedWork.id}>
        {/* Carousel */}
        <div className="carousel">
          <button className="carousel-button left" onClick={goToPrevious}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <img
            src={pictures[currentImageIndex]}
            alt={selectedWork.title}
            className="lmj-apart"
          />

          <button className="carousel-button right" onClick={goToNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        {/* Compteur dynamique */}
        <div className="counter">
          {currentImageIndex + 1}/{pictures.length}
        </div>

        {/* Contenu principal */}
        <div className="apart-conteneur">
          <div className="apart-container">
            <h1 className="apart-title">{selectedWork.title}</h1>
            <h3 className="apart-subtitle">{selectedWork.location}</h3>
            <p className="apart-description">{selectedWork.description}</p>
            <div className="confort-text">
              {selectedWork.tags.map((tag, index) => (
                <p key={index} className="tag">
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className="apart-detail">
            <div className="apart-name">
              <h3 className="align-custom">
                {selectedWork.host.name.replace(" ", "\n")}
              </h3>
              <img
                src={selectedWork.host.picture}
                alt={selectedWork.host.name}
                className="host-picture"
              />
            </div>
            <Rating rating={selectedWork.rating} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apart;
