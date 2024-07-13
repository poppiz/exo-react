import React from "react";
import Footer from "./Footer/Footer.jsx";
import Nav from "./Nav.jsx";
const Services = () => {
  return (
    <div>
      <Nav />
      <div className="text-center" id="services">
        <img className="img-fluid" src="./img/banner.jpg" alt="" />
        <div className="px-5 py-5">
          <h2 className="text-uppercase">Mon offre de services</h2>
          <p>Voici les prestations sur lesquelles je peux intervenir.</p>
          <hr className="border border-primary border-2 opacity-100 m-auto w-25" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          {/*-------------------------UX design------------------------*/}
          <div className="card mx-3 my-3 py-5 shadow border-0 col-md ">
            <div className="card-body text-center">
              <img
                className=" px-5 pb-4  "
                src="./img/computer.png"
                alt="screen"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "./img/computer2.png")
                }
                onMouseOut={(e) => (e.currentTarget.src = "./img/computer.png")}
              />

              <h3 className="text-uppercase">ux design</h3>
              <p className="card-text">
                L'<strong>UX Design</strong> est une méthode de conception
                centrée sur l'utilisateur. Son but est d'offrir une expérience
                de navigation optimale à l'internaute.
              </p>
            </div>
          </div>
          {/*-------------------------développement web------------------------*/}
          <div className="card mx-3 my-3 py-5 shadow border-0 col-md ">
            <div className="card-body text-center">
              <img
                className=" px-5 pb-4"
                src="./img/transfer-data.png"
                alt="feuille avec logo de transfère"
                onMouseOver={(e) =>
                  (e.currentTarget.src = "./img/transfer-data2.png")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = "./img/transfer-data.png")
                }
              />

              <h3 className="text-uppercase">développement web</h3>
              <p className="card-text">
                Le <strong>développement de site web</strong> repose sur
                l'utilisation des languages{" "}
                <abbr title="HyperText Markup Language" className="initialism">
                  HTML
                </abbr>
                ,{" "}
                <abbr title="Cascading Style Sheets" className="initialism">
                  CSS
                </abbr>
                , JavaScript et{" "}
                <abbr title="Hypertext Preprocessor" className="initialism">
                  PHP
                </abbr>
                .
              </p>
            </div>
          </div>
          {/*------------------------référencement------------------------*/}
          <div className="card mx-3 my-3 py-5 shadow border-0 col-md ">
            <div className="card-body text-center">
              <img
                className="px-5 pb-4"
                src="./img/money.png"
                alt="dollar dans une loupe"
                onMouseOver={(e) => (e.currentTarget.src = "./img/money2.png")}
                onMouseOut={(e) => (e.currentTarget.src = "./img/money.png")}
              />

              <h3 className="text-uppercase">référencement</h3>
              <p className="card-text">
                Le <strong>référencement naturel d'un site</strong>, aussi
                appelé{" "}
                <abbr title="Search Engine Optimization" className="initialism">
                  SEO
                </abbr>
                , consiste à mettre des techniques en oeuvre pour améliorer sa
                position dans les résultats des moteurs de recherche.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
