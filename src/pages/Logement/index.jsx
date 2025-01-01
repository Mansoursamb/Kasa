import React from "react";
import { useParams } from "react-router-dom";
import Apart from "../../components/Apart";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Description from "../../components/Description";
import works from "../../assets/data.json";

function Logement() {
  const { id: selectedWorkId } = useParams();

  const selectedWork = works.find((work) => work.id === selectedWorkId);

  if (!selectedWork) {
    return <div>Aucun logement trouvé pour cet ID.</div>;
  }

  return (
    <div>
      <Header />
      <Apart />
      <div className="look">
        {/* Description du logement */}
        <Description
          className="left"
          titre="Description"
          text={selectedWork.description || "Description non disponible"}
        />
        {/* Équipements du logement */}
        <Description
          className="right"
          titre="Équipements"
          text={
            <ul>
              {selectedWork.equipments ? (
                selectedWork.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              ) : (
                <li>Équipements non disponibles</li>
              )}
            </ul>
          }
        />
      </div>
      <Footer />
    </div>
  );
}
export default Logement;
