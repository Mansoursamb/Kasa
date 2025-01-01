import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Ruban from "../../assets/Image source 2.png";
import Footer from "../../components/Footer";
import Description from "../../components/Description";
import works from "../../assets/data.json";

function Apropos() {
  return (
    <div>
      <Header />
      <Banner imageSrc={Ruban} text="" />
      <div className="description-container">
        {works.map((work, index) => (
          <Description
            key={index}
            titre={work.title || "Titre indisponible"}
            text={work.description || "Description non disponible"}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Apropos;
