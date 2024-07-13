import React, { useRef } from "react";
import Footer from "../Footer/Footer.jsx";
import Nav from "../Nav.jsx";
import "./Home.css";
const Home = () => {
  const aboutRef = useRef(null);
  return (
    <div>
      <Nav />
      <div className="hello-div card bg-dark text-white rounded-0 " id="home">
        <div className="card-img-overlay d-flex justify-content-center align-items-center ">
          <div className="text-center">
            <h1 className="text-white">
              Bonjour, je suis <br /> John Doe
            </h1>
            <h2 className="text-white">Développeur web full stack</h2>
            <button
              className="btn btn-primary btn-lg px-4"
              onClick={() => {
                aboutRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              En savoir plus
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- a propos -----------*/}

      <div className=" text card  border-0 shadow-lg py-5 px-4 mx-md-5 ">
        <div className="container">
          <div className="row">
            <div
              className=" card-body about col-sm col-md-6"
              id="about"
              ref={aboutRef}
            >
              <h3 className="card-title">À propos</h3>
              <hr className="border border-primary border-1 opacity-100 mb-5" />
              <article>
                <p className="card-text">
                  Passionné par l'informatique et les nouvelles technologies,
                  j'ai suivi une formation d'
                  <strong>intégrateur-développeur web </strong>
                  au CEF. Au cours de cette formation j'ai pu acquérir des bases
                  solides pour travailler dans le domaine du
                  <strong> développement web</strong>.
                </p>
                <p>
                  Basé à Lyon, je suis en recherche d'une alternance au sein
                  d'une agence digitale pour consolidé ma formation de
                  <strong> développeur web full stack</strong>.
                </p>
                <p>
                  J'accorde une attention particulière à la qualité du code que
                  j'écris et je respecte les bonnes pratiques du web.
                </p>
              </article>
            </div>
            {/* ------------------- competences ---------------*/}

            <div className="card border-0 competences col-sm col-md-6">
              <img
                src="img/john-doe-about.jpg"
                className="card-img-top px-1 img-fluid rounded"
                alt="John doe"
              />
              <div className="card-body px-1">
                <h4 className="card-title">Mes compétences</h4>
                <p>HTML 90%</p>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: +"90" + "%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p>CSS3 80%</p>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: +"80" + "%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p>JAVASCRIPT 70%</p>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: +"70" + "%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p>PHP 60%</p>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: +"60" + "%" }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p>REACT 50%</p>
                <div className="progress mb-4">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: +"50" + "%" }}
                    aria-valuenow="50"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
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

export default Home;
