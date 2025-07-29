import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <h3 className="logo-text m-0">
            {/* <span className="head-logo">&lt;/&gt; </span>Pratyush */}
            <span className="head-logo">
              <img
                src="/PratyushLogo.png"
                alt="PratLogo"
                width="45px"
                height="45px"
              />
            </span>{" "}
            Pratyush
          </h3>
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler bg-transparent custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex align-items-center gap-lg-4 gap-2 text-center">
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/contact">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
