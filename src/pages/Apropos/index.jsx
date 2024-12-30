import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Ruban from "../../assets/Image source 2.png";
import Footer from "../../components/Footer";
import Description from "../../components/Description";
function Apropos() {
  return (
    <div>
      <Header />
      <Banner imageSrc={Ruban} text="" />
      <div className="desccription-container">
        <Description
          titre="Fiabilité"
          text="          
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              nemo sint eum perferendis quibusdam cupiditate voluptatem eius
              deleniti distinctio ratione, quae, praesentium cum dicta ex
              officia laudantium sed incidunt. Autem.          
          "
        />
        <Description
          titre="Réspect"
          text="          
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              nemo sint eum perferendis quibusdam cupiditate voluptatem eius
              deleniti distinctio ratione, quae, praesentium cum dicta ex
              officia laudantium sed incidunt. Autem.          
          "
        />
        <Description
          titre="Service"
          text="          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          nemo sint eum perferendis quibusdam cupiditate voluptatem eius
          deleniti distinctio ratione, quae, praesentium cum dicta ex
          officia laudantium sed incidunt. Autem.          
      "
        />
        <Description
          titre="Sécurité"
          text="          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          nemo sint eum perferendis quibusdam cupiditate voluptatem eius
          deleniti distinctio ratione, quae, praesentium cum dicta ex
          officia laudantium sed incidunt. Autem.          
      "
        />
      </div>
      <Footer />
    </div>
  );
}

export default Apropos;
