import React from "react";
import Footer from "./Footer/Footer";
import Nav from "./Nav";

const Mentions = () => {
  return (
    <div>
      <Nav />
      <div id="mentions">
        <h2 className="text-uppercase text-center pt-5">mentions légales</h2>
        <hr className="border border-primary border-2 opacity-100 w-25 m-auto mb-5" />
      </div>
      <div
        class="accordion accordion-flush border mx-3 mx-md-5 rounded"
        id="accordionFlushExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <strong>Éditeur du site</strong>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <h3>John Doe</h3>
              <address>
                <p>
                  <img
                    src="../img/placeholder.png"
                    alt="placeholder google map"
                  />
                  <strong>
                    40 Rue Laurie Diebold <br />
                    69009 Lyon, France
                    <br />
                    <img src="../img/smartphone.png" alt="smartphone" />
                    Téléphone :{" "}
                    <a href="tel:0620304050" className="link text-primary">
                      <strong>06 20 30 40 50</strong>
                    </a>
                    <br />
                    <img src="../img/email.png" alt="email logo" />{" "}
                    <a
                      href="mailto:john.doe@gmail.com"
                      className="text-primary text-decoration-none"
                    >
                      <strong>john.doe@gmail.com</strong>
                    </a>
                  </strong>
                </p>
              </address>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <strong>Hébergeur</strong>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <h3>Always Data</h3>
              <p>
                91 rue du Faubourg Saint honoré <br />
                75008 Paris
              </p>
              <img src="../img/globe.png" alt="" />
              <a
                href="https://www.alwaysdata.com/fr/"
                className="text-primary text-decoration-none"
              >
                {" "}
                www.alwaysdata.com
              </a>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <strong>crédits</strong>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <h3>Crédits</h3>
              <p>Site développé par John Doe, étidiant du CEF.</p>
              <p>
                Les images libres de droit sont issues du site{" "}
                <a
                  href="https://pixabay.com/fr/"
                  className="text-decoration-none text-primary"
                >
                  Pixabay
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Mentions;
