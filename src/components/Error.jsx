import React from "react";
import { Link } from "react-router-dom";
import "../styles/Error.css";
import Header from "./Header";
import Footer from "./Footer";
function Error() {
  return (
    <>
      <Header />
      <div className="error">
        <h1>404 </h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link>
          <p>Retourner sur la page d' accueil</p>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Error;
