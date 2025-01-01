import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Apart.css";
import works from "../assets/data.json";

function Apart() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const selectedWork = works.find((work) => work.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const pictures = selectedWork.pictures;

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
        <div className="carousel">
          <button className="carousel-button left" onClick={goToPrevious}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <img
            src={pictures[currentImageIndex]}
            alt={`Apart ${currentImageIndex + 1}`}
            className="lmj-apart"
          />
          <button className="carousel-button right" onClick={goToNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <div className="apart-conteneur">
          <div className="apart-container">
            <h1 className="apart-title">{selectedWork.title}</h1>
            <h3 className="apart-subtitle">{selectedWork.location}</h3>
            <p className="apart-description">{selectedWork.description}</p>
            <div className="confort-text">
              {selectedWork.tags.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))}
            </div>
          </div>
          <div className="apart-detail">
            <div className="apart-name">
              <h3 className="align-custom">{selectedWork.host.name}</h3>
              <img
                src={selectedWork.host.picture}
                alt={selectedWork.host.name}
                className="host-picture"
              />
            </div>
            <div className="rating">
              {Array.from({ length: Number(selectedWork.rating) }).map(
                (_, index) => (
                  <span key={index}>
                    <i className="fa-solid fa-star"></i>
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apart;
