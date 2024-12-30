import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Ruban from "../../assets/hero.jpg";
import Footer from "../../components/Footer";
function Accueil() {
  return (
    <div>
      <Header />
      <Banner imageSrc={Ruban} text="Chez vous, partout ailleurs" />
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default Accueil;
