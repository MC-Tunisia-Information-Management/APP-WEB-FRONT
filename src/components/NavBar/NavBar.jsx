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
        

        <div className={`flex-horizontal navbar-content ${isMenuOpen ? "active" : ""}`}>
          <Link to="/home" style={{ color: "inherit", textDecoration: "none" }}>
            <div>Home</div>
          </Link>
          <Link to="/mc-tunisia" style={{ color: "inherit", textDecoration: "none" }}>
            <div>MC Tunisia</div>
          </Link>

          {/* Knowledge Hub with hover-based sub-menu */}
          <div className="knowledge-hub-menu" >
            <div>Knowledge Hub</div>
            <div className="sub-menu flex-horizontal navbar">
              {/* Back Office with nested sub-menu */}
              <div className="sub-menu-item">
                Back Office
                <div className="nested-sub-menu">
                  <Link to="/knowledge-hub/marketing" style={{ color: "inherit", textDecoration: "none" }}>
                    <div className="sub-menu-item flex-horizontal navbar">Marketing</div>
                  </Link>
                  <Link to="/knowledge-hub/business-development" style={{ color: "inherit", textDecoration: "none" }}>
                    <div className="sub-menu-item flex-horizontal navbar">Business Development</div>
                  </Link>

                  <Link to="/knowledge-hub/business-development" style={{ color: "inherit", textDecoration: "none" }}>
                    <div className="sub-menu-item flex-horizontal navbar">Finance & legalities</div>
                  </Link>

                  <Link to="/knowledge-hub/business-development" style={{ color: "inherit", textDecoration: "none" }}>
                    <div className="sub-menu-item flex-horizontal navbar">Talent management</div>
                  </Link>

                  <Link to="/knowledge-hub/business-development" style={{ color: "inherit", textDecoration: "none" }}>
                    <div className="sub-menu-item flex-horizontal navbar">Entity control board</div>
                  </Link>

                  <Link to="/knowledge-hub/business-development" style={{ color: "inherit", textDecoration: "none" }}>
                    <div className="sub-menu-item flex-horizontal navbar">Organizational development</div>
                  </Link>
                </div>
              </div>

              {/* Front Office with nested sub-menu */}
              <div className="sub-menu-item">
                Front Office
                <div className="nested-sub-menu">
                  <Link to="/knowledge-hub/client-management" style={{ color: "inherit", textDecoration: "none" }}>
                    <div className="sub-menu-item flex-horizontal navbar">Outgoing global talent</div>
                  </Link>
                  <Link to="/knowledge-hub/sales" style={{ color: "inherit", textDecoration: "none" }}>
                    <div className="sub-menu-item flex-horizontal navbar">Outgoing global teacher</div>
                  </Link>

                  <Link to="/knowledge-hub/sales" style={{ color: "inherit", textDecoration: "none" }}>
                    <div className="sub-menu-item flex-horizontal navbar">Outgoing global teacher</div>
                  </Link>

                  <Link to="/knowledge-hub/sales" style={{ color: "inherit", textDecoration: "none" }}>
                    <div className="sub-menu-item flex-horizontal navbar">Outgoing global volunteer</div>
                  </Link>

                  <Link to="/knowledge-hub/sales" style={{ color: "inherit", textDecoration: "none" }}>
                    <div className="sub-menu-item flex-horizontal navbar">Incoming global talent</div>
                  </Link>
                  <Link to="/knowledge-hub/sales" style={{ color: "inherit", textDecoration: "none" }}>
                    <div className="sub-menu-item flex-horizontal navbar">Incoming global teacher</div>
                  </Link>
                  <Link to="/knowledge-hub/sales" style={{ color: "inherit", textDecoration: "none" }}>
                    <div className="sub-menu-item flex-horizontal navbar">Incoming global volunteer</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>


          <Link to="/">
          <div className="navbar-logo">
            <img src={Logo} alt="logo" />
          </div>
          </Link>
          
          <Link to="/network-trackers" style={{ color: "inherit", textDecoration: "none" }}>
            <div>Network Tools</div>
          </Link>
          <Link to="/conference-outputs" style={{ color: "inherit", textDecoration: "none" }}>
            <div>Conference Outputs</div>
          </Link>
        </div>

        <div className="navbar-button-container">
          <Link to="/contact-us" style={{ color: "inherit", textDecoration: "none" }}>
            <div className="navbar-button">
              <div >Contact us</div>
              {/*<i className="fas fa-user"></i>*/} {/* User profile icon */}

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
