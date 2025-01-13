import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Galerie from "../../components/Galerie";
import Banner from "../../components/Banner";
import Ruban from "../../assets/hero.jpg";
function Gallery() {
  return (
    <div>
      <Header />
      <Banner imageSrc={Ruban} text=" Chez vous, partout et ailleurs" />
      <Galerie />
      <Footer />
    </div>
  );
}

export default Gallery;
