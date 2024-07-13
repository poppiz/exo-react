import React from "react";
import Footer from "./Footer/Footer";
import Nav from "./Nav";

const Realisations = () => {
  return (
    <div>
      <Nav />
      <div className="text-center ">
        <div className="px-5 py-5">
          <h2 className="text-uppercase">portfolio</h2>
          <h3>Voici quelques-unes de mes réalisations</h3>
          <hr className="border border-primary border-3 opacity-100 m-auto w-25" />
        </div>
        <div className="container ">
          <div className="row">
            {/*-------------------------- fresh-food ----------------------*/}
            <div className="col-md">
              <div className="card mx-2  my-3  " id="fresh-food">
                <img
                  className="card-img-top "
                  src="../img/portfolio/fresh-food.jpg"
                  alt="panier de légumes"
                />
                <div className="card-body">
                  <h5 className="card-title">Fresh food</h5>
                  <p className="card-text">
                    Réalisation d'un site avec commande en ligne
                  </p>
                  <button type="button" className="btn btn-outline-primary">
                    voir
                  </button>
                </div>
                <div className="card-footer">
                  <small clasNames="text-muted">
                    Site réalisé avec PHP et MySQL
                  </small>
                </div>
              </div>
            </div>
            {/*-------------------------- Restaurant Akira ----------------------*/}
            <div className="col-md">
              <div className="card mx-2  my-3 " id="Akira">
                <img
                  className="card-img-top"
                  src="../img/portfolio/restaurant-japonais.jpg"
                  alt="nourriture japonaise"
                />
                <div className="card-body">
                  <h5 className="card-title">Restaurant Akira</h5>
                  <p className="card-text">Réaliqation d'un site vitrine</p>
                  <button type="button" className="btn btn-outline-primary">
                    voir
                  </button>
                </div>
                <div className="card-footer">
                  <small>Site réalisé avec WorldPress</small>
                </div>
              </div>
            </div>
          </div>
          {/*-------------------------- Espace bien-etre ----------------------*/}
          <div className="row">
            <div id="Espace">
              <div className="card mx-2 my-3 col-md-6">
                <img
                  className="card-img-top"
                  src="../img/portfolio/espace-bien-etre.jpg"
                  alt="panier de légumes"
                />
                <div className="card-body">
                  <h5 className="card-title">Espace bien-être</h5>
                  <p className="card-text">
                    Réalisation d'un site vitrine pour un praticien de bien-être
                  </p>
                  <button type="button" className="btn btn-outline-primary">
                    voir
                  </button>
                </div>
                <div className="card-footer">
                  <small c>Site réalisé en HTML/CSS</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Realisations;
