import React from "react";
import Footer from "../Footer/Footer.jsx";

import Nav from "../Nav.jsx";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <Nav />
      <div className="background py-3" id="contact">
        <div className="contact mx-3 my-2 px-5 py-5 rounded">
          <div className="text-center mb-5">
            <h2>Me contacter</h2>
            <p>
              Pour me contacter en vue d'un entretient ou d'une collaboration,
              merci de remplir le formulaire de contact
            </p>
            <hr className="tiret border border-primary border-2 opacity-100 m-auto w-25" />
          </div>
          <div className="container">
            {" "}
            <div className="row">
              {/*----------------formulaire de contact---------------*/}
              <div className="col-md">
                <h2>Formulaire de contact</h2>
                <hr className="border border-primary border-1 opacity-100" />
                <form className="text-center my-3">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control border"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control border"
                      placeholder="Votre adresse email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control border"
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control border"
                      placeholder="sujet"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      type="text"
                      id="textarea"
                      className="form-control border"
                      placeholder="Votre message"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Envoyer
                  </button>
                </form>
              </div>

              {/*-------------------- coordonnées-------------------------------*/}
              <div className="col-md">
                <h2>Mes coordonnées</h2>
                <hr className="border border-primary border-1 opacity-100" />
                <address>
                  <img
                    src="../img/placeholder.png"
                    alt="placeholder google map"
                  />
                  40 Rue Laure Diebold, 69009 Lyon, France <br />
                  <img src="../img/smartphone.png" alt="smartphone" />
                  <a href="tel:0620304050" className="link">
                    06 20 30 40 50
                  </a>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
