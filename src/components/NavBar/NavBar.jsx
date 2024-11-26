import React, { useState } from "react";
import "./navbar.css";
import Logo from "../../assests/AIESEC-Human-White.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isKnowledgeHubOpen, setIsKnowledgeHubOpen] = useState(false); // Track Knowledge Hub state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleKnowledgeHub = () => {
    setIsKnowledgeHubOpen(!isKnowledgeHubOpen); // Toggle Knowledge Hub menu visibility
  };

  return (
    <section className="flex-horizontal navbar">
      <div className="navbar-button-container">
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="logo" height={45} />
        </Link>
      </div>

      <div className={`flex-horizontal navbar-content ${isMenuOpen ? "active" : ""}`}>
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <div>Home</div>
        </Link>
        <Link to="/mc-tunisia" style={{ color: "inherit", textDecoration: "none" }}>
          <div>MC Tunisia</div>
        </Link>

        <div className={`knowledge-hub-menu ${isKnowledgeHubOpen ? "active" : ""}`} onClick={toggleKnowledgeHub}>
        <Link to="/knowledge-hub" style={{ color: "inherit", textDecoration: "none" }}>
          <div>Knowledge Hub</div>
        </Link>

          <div className="sub-menu flex-horizontal navbar">
            {/* Back Office with nested sub-menu */}
            <div className="sub-menu-item">
              Back Office
              <div className="nested-sub-menu">
                <Link to="/knowledge-hub/mkt" style={{ color: "inherit", textDecoration: "none" }}>
                  <div className="sub-menu-item flex-horizontal navbar">Marketing</div>
                </Link>
                <Link to="/knowledge-hub/bd" style={{ color: "inherit", textDecoration: "none" }}>
                  <div className="sub-menu-item flex-horizontal navbar">Business Development</div>
                </Link>
                <Link to="/knowledge-hub/fnl" style={{ color: "inherit", textDecoration: "none" }}>
                  <div className="sub-menu-item flex-horizontal navbar">Finance & Legalities</div>
                </Link>
                <Link to="/knowledge-hub/tm" style={{ color: "inherit", textDecoration: "none" }}>
                  <div className="sub-menu-item flex-horizontal navbar">Talent Management</div>
                </Link>
                <Link to="/knowledge-hub/ecb" style={{ color: "inherit", textDecoration: "none" }}>
                  <div className="sub-menu-item flex-horizontal navbar">Entity Control Board</div>
                </Link>
                <Link to="/knowledge-hub/od" style={{ color: "inherit", textDecoration: "none" }}>
                  <div className="sub-menu-item flex-horizontal navbar">Organizational Development</div>
                </Link>
              </div>
            </div>

            {/* Front Office with nested sub-menu */}
            <div className="sub-menu-item">
              Front Office
              <div className="nested-sub-menu">
                <Link to="/knowledge-hub/ogta" style={{ color: "inherit", textDecoration: "none" }}>
                  <div className="sub-menu-item flex-horizontal navbar">Outgoing Global Talent</div>
                </Link>
                <Link to="/knowledge-hub/ogte" style={{ color: "inherit", textDecoration: "none" }}>
                  <div className="sub-menu-item flex-horizontal navbar">Outgoing Global Teacher</div>
                </Link>
                <Link to="/knowledge-hub/ogv" style={{ color: "inherit", textDecoration: "none" }}>
                  <div className="sub-menu-item flex-horizontal navbar">Outgoing Global Volunteer</div>
                </Link>
                <Link to="/knowledge-hub/igta" style={{ color: "inherit", textDecoration: "none" }}>
                  <div className="sub-menu-item flex-horizontal navbar">Incoming Global Talent</div>
                </Link>
                <Link to="/knowledge-hub/igte" style={{ color: "inherit", textDecoration: "none" }}>
                  <div className="sub-menu-item flex-horizontal navbar">Incoming Global Teacher</div>
                </Link>
                <Link to="/knowledge-hub/igv" style={{ color: "inherit", textDecoration: "none" }}>
                  <div className="sub-menu-item flex-horizontal navbar">Incoming Global Volunteer</div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Link to="/network-trackers" style={{ color: "inherit", textDecoration: "none" }}>
          <div>Network Tools</div>
        </Link>
        <Link to="/conference-outputs" style={{ color: "inherit", textDecoration: "none" }}>
          <div>Conference Outputs</div>
        </Link>

        <Link to="/contact-us" style={{ color: "inherit", textDecoration: "none" }}>
          <div>Contact Us</div>
        </Link>
      </div>

      <div className="navbar-hamburger navbar-button-container" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </section>
  );
}

export default NavBar;
