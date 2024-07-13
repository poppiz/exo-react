import React from "react";
import { HashLink } from "react-router-hash-link";
import "./Footer.css";

const Footer = () => {
  const showButton = () =>
    document.querySelector("#scroll-to-top").classList.add("visible");
  const hideButton = () =>
    document.querySelector("#scroll-to-top").classList.remove("visible");
  document.addEventListener("scroll", (e) =>
    window.scrollY < 100 ? hideButton() : showButton()
  );
  return (
    <footer className=" pt-5  pb-3 ">
      <div className="container">
        <div className="row">
          {/*------------------------- Contact ------------------------------*/}
          <div className="col-md-6 col-lg">
            <h4>John Doe</h4>
            <address>
              <p>
                40 Rue Laurie Diebold <br />
                69009 Lyon, France
                <br />
                Téléphone :{" "}
                <a href="tel:0620304050" className="link">
                  06 20 30 40 50
                </a>
              </p>
            </address>
            <HashLink to="/Profile" className="pl-4" target="blank">
              <img src="./img/github.png" alt="logo github" />
            </HashLink>
            <a href="https://x.com/" className="px-4" target="blank">
              <img src="./img/twitter.png" alt="logo twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/john-do-477397204/"
              target="blank"
            >
              <img src="./img/linkedin.png" alt="logo linkedin" />
            </a>
          </div>
          {/*------------------------ Liens utiles ---------------------------*/}
          <div className="col-md-6 col-lg">
            <h4>Liens utiles</h4>
            <ul>
              <li>
                <HashLink to="/#home" className="link">
                  Acceuil
                </HashLink>
              </li>
              <li>
                <HashLink to="/#about" className="link">
                  À propos
                </HashLink>
              </li>
              <li>
                <HashLink to="/Services#services" className="link">
                  Services
                </HashLink>
              </li>
              <li>
                <HashLink to="/Contact#contact" className="link">
                  Me contacter
                </HashLink>
              </li>
              <li>
                <HashLink to="/Mentions#mentions" className="link">
                  Mentions légales
                </HashLink>
              </li>
            </ul>
          </div>
          {/*---------------------------- Réalisations------------------------------*/}
          <div className="col-md-6 col-lg">
            <h4>Mes dernières réalistions</h4>
            <ul>
              <li>
                <HashLink to="/Realisations#fresh-food" className="link">
                  Fresh food
                </HashLink>
              </li>
              <li>
                <HashLink to="/Realisations#Akira" className="link">
                  Restaurant Akira
                </HashLink>
              </li>
              <li>
                <HashLink to="/Realisations#Espace" className="link">
                  Espace bien-être
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg">
            <h4>Mes derniers articles</h4>
            <ul>
              <li>
                <HashLink to="/Blog#coder" className="link">
                  Coder son site en HTML/CSS
                </HashLink>
              </li>
              <li>
                <HashLink to="/Blog#vendre" className="link">
                  Vendre ses produits sur le web
                </HashLink>
              </li>
              <li>
                <HashLink to="/Blog#google" className="link">
                  Se positionner sur Google
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-3" id="scroll-to-top">
        <HashLink to="#header" className="text-decoration-none text-primary">
          Retour en haut
        </HashLink>
      </div>
      <div className="text-center bg-dark copyright text-white mt-5 ">
        <p className="pt-3">© Designed by John Doe</p>
      </div>
    </footer>
  );
};
export default Footer;
