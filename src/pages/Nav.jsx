import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header id="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-uppercase">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-decoration-none" to="/">
            John Doe
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item Link">
                <NavLink
                  className="nav-link "
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#545e6f",
                  })}
                  to="/"
                >
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  to="/Services"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#545e6f",
                  })}
                >
                  services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#545e6f",
                  })}
                  to="/Realisations"
                >
                  réalisations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#545e6f",
                  })}
                  to="/Blog"
                >
                  blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  style={({ isActive }) => ({
                    color: isActive ? "#fff" : "#545e6f",
                  })}
                  to="/Contact"
                >
                  me contacter
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
