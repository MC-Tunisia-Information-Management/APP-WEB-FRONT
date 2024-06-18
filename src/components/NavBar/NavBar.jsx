import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assests/logo-transparent.png";
import HamburgerIcon from "../../assests/hamburger-icon.png"; // Add the hamburger icon image
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className="flex-horizontal navbar">
        <Link to="/">
          <div className="navbar-logo">
            <img src={Logo} alt="logo" />
          </div>
        </Link>
        <div className={`flex-horizontal navbar-content ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/mc-tunisia"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div>MC Tunisia</div>
          </Link>
          <Link
            to="/knowledge-hub"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div>Knowledge Hub</div>
          </Link>
          <Link
            to="/network-trackers"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div>Network Trackers</div>
          </Link>
          <Link
            to="/conference-outputs"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div>Conference Outputs</div>
          </Link>
        </div>
        <div className="navbar-button-container">
          <Link
            to="/contact-us"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <div className="navbar-button">
              <div className="navbar-button-text">Contact us</div>
            </div>
          </Link>
        </div>
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <img src={HamburgerIcon} alt="Menu" />
        </div>
      </section>
    </>
  );
}

export default NavBar;
