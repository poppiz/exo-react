import React from "react";
import Footer from "./Footer/Footer.jsx";
import Nav from "./Nav.jsx";
const Blog = () => {
  return (
    <div>
      <Nav />
      <div>
        <div className="text-center  py-5">
          <h2 className="text-uppercase">Blog</h2>
          <p>Retrouvez ici quelsques articles sur le développement web.</p>
          <hr className="border border-primary border-3  opacity-100 m-auto  w-25" />
        </div>
        <div className="container">
          <div className="row ">
            <div className="col-md">
              {/* ---------------- coder son site -----------*/}
              <div className="card mx-2 my-3 " id="coder">
                <img
                  className="card-img-top"
                  src="../img/blog/coder.jpg"
                  alt="lignes de code"
                />
                <div className="card-body">
                  <h5 className="card-title">Coder son site en HTML/CSS</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button type="button" className="btn btn-primary">
                    Lire la suite
                  </button>
                </div>
                <div className="card-footer">
                  <small>
                    Publié le <time dateTime="2022-08-22">22 août 2022</time>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md">
              {/* ---------------- vendre ses produits -----------*/}
              <div className="card mx-2 my-3" id="vendre">
                <img
                  className="card-img-top"
                  src="../img/blog/croissance.jpg"
                  alt="piles de pièces"
                />
                <div className="card-body">
                  <h5 className="card-title">Vendre ses produits sur le web</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button type="button" className="btn btn-primary">
                    Lire la suite
                  </button>
                </div>
                <div className="card-footer">
                  <small>
                    Publié le <time dateTime="2022-08-20">20 août 2022</time>
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              {/* ---------------- se positionner sur google -----------*/}
              <div className="card mx-2 my-3 " id="google">
                <img
                  className="card-img-top"
                  src="../img/blog/google.jpg"
                  alt="ordinateur portable avec page google"
                />
                <div className="card-body">
                  <h5 className="card-title">Se positionner sur google</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button type="button" className="btn btn-primary">
                    Lire la suite
                  </button>
                </div>
                <div className="card-footer">
                  <small>
                    Publié le <time dateTime="2022-08-1">1 août 2022</time>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md">
              {/* ---------------- coder en responsive -----------*/}
              <div className="card mx-2 my-3">
                <img
                  className="card-img-top"
                  src="../img/blog/screens.jpg"
                  alt="divers écrans sur un bureau"
                />
                <div className="card-body">
                  <h5 className="card-title">Coder en responsive design</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button type="button" className="btn btn-primary">
                    Lire la suite
                  </button>
                </div>
                <div className="card-footer">
                  <small>
                    Publié le <time dateTime="2022-07-31">31 juillet 2022</time>
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              {/* ---------------- techniques de référencement -----------*/}
              <div className="card mx-2 my-3 ">
                <img
                  className="card-img-top"
                  src="../img/blog/seo.jpg"
                  alt="SEO"
                />
                <div className="card-body">
                  <h5 className="card-title">Techniques de référencement</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button type="button" className="btn btn-primary">
                    Lire la suite
                  </button>
                </div>
                <div className="card-footer">
                  <small>
                    Publié le <time dateTime="2022-07-30">30 juillet 2022</time>
                  </small>
                </div>
              </div>
            </div>
            <div className="col-md">
              {/* ---------------- Apprendre a coder -----------*/}
              <div className="card mx-2 my-3 ">
                <img
                  className="card-img-top"
                  src="../img/blog/technos.png"
                  alt="divers logos de technos pour coder"
                />
                <div className="card-body">
                  <h5 className="card-title">Apprendre à coder</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <button type="button" className="btn btn-primary">
                    Lire la suite
                  </button>
                </div>
                <div className="card-footer">
                  <small>
                    Publié le <time dateTime="2022-07-12">12 juillet 2022</time>
                  </small>
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

export default Blog;
