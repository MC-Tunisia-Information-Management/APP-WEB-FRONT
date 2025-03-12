import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "../css/knowledgehub.css";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";

import MaktIcon from "../assests/makt.png";
import BDIcon from "../assests/BDD..png";
import ECIcon from "../assests/ecb.png";
import ODIcon from "../assests/OD..png";
import TMtIcon from "../assests/TM..png";
import FIcon from "../assests/FF.png";
import knowledge from "../assests/KNOWLEDGE.jpg";

const KnowledgeHubBanner = () => {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/knowledge-hub",
      title: "Knowledge Hub",
    });
  }, []);

  return (
    <>
      <NavBar />
      { }
      <div className="banner">
        <img
          src={knowledge}
          alt={`Hero Slide`}
          className="hero-image"
        />
      </div>

      <section className="knowledgehub">
        { }
        <div className="back-office-section">
          <div className="hub-page-title">The Back Office</div>
          <div className="departments-grid">
            { }
            <a href="/knowledge-hub/mkt" className="read-more">
              <div className="department">
                <img src={MaktIcon} alt="mkt" className="department-icon" />
                <div className="department-content">
                  <h3 className="department-title">Marketing</h3>
                  <p className="department-description">
                    Understand how to be a Marketer
                  </p>
                </div>
              </div>
            </a>

            { }
            <a href="/knowledge-hub/bd" className="read-more">
              <div className="department">
                <img src={BDIcon} alt="BD Icon" className="department-icon" />
                <div className="department-content">
                  <h3 className="department-title">BD</h3>
                  <p className="department-description">
                    Buisness Developpement & Engage with AIESEC
                  </p>
                </div>
              </div>
            </a>

            <a href="/knowledge-hub/fnl" className="read-more">
              <div className="department">
                <img src={FIcon} alt="F&L Icon" className="department-icon" />
                <div className="department-content">
                  <h3 className="department-title">F&L</h3>
                  <p className="department-description">
                    Finance & Legalities for all the swappers out there
                  </p>
                </div>
              </div>
            </a>

            <a href="/knowledge-hub/tm" className="read-more">
              <div className="department">
                <img src={TMtIcon} alt="TM Icon" className="department-icon" />
                <div className="department-content">
                  <h3 className="department-title">TM</h3>
                  <p className="department-description">
                    Talent Management
                  </p>
                </div>
              </div>
            </a>
            <a href="/knowledge-hub/ecb" className="read-more">
              <div className="department">
                <img src={ECIcon} alt="TM Icon" className="department-icon" />
                <div className="department-content">
                  <h3 className="department-title">ECB</h3>
                  <p className="department-description">
                    Entity Control Board
                  </p>
                </div>
              </div>
            </a>
            <a href="/knowledge-hub/od" className="read-more">
              <div className="department">
                <img src={ODIcon} alt="TM Icon" className="department-icon" />
                <div className="department-content">
                  <h3 className="department-title">OD</h3>
                  <p className="department-description">
                    Organizational Developpement
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        { }
        <div className="front-office-section">
          <div className="mc-team-text">The Front Office</div>
          <div className="departments-grid">
            { }
            <a href="/knowledge-hub/igta" className="read-more">
              <div className="department">
                <img src="path-to-igt-icon.png" alt="IGT Icon" className="department-icon" />
                <div className="department-content">
                  <h3 className="department-title">IGTa</h3>
                  <p className="department-description">incoming Global Talent</p>
                </div>
              </div>
            </a>

            <a href="/knowledge-hub/igte" className="read-more">
              <div className="department">
                <img src="path-to-icv-icon.png" alt="ICV Icon" className="department-icon" />
                <div className="department-content">
                  <h3 className="department-title">IGte</h3>
                  <p className="department-description">incoming Global Teacher</p>

                </div>
              </div>
            </a>
            <a href="/knowledge-hub/igv" className="read-more">
              <div className="department">
                <img src="path-to-icv-icon.png" alt="ICV Icon" className="department-icon" />
                <div className="department-content">
                  <h3 className="department-title">IGV</h3>
                  <p className="department-description">incoming Global Volenteer</p>

                </div>
              </div>
            </a>
            <a href="/knowledge-hub/ogv" className="read-more">
              <div className="department">
                <img src="path-to-icv-icon.png" alt="ICV Icon" className="department-icon" />
                <div className="department-content">
                  <h3 className="department-title">OGV</h3>
                  <p className="department-description">outgoing Global Volenteer</p>

                </div>
              </div>
            </a>

            <a href="/knowledge-hub/ogta" className="read-more">
              <div className="department">
                <img src="path-to-ogv-icon.png" alt="OGV Icon" className="department-icon" />
                <div className="department-content">
                  <h3 className="department-title">OGTa</h3>
                  <p className="department-description">outgoing Global Talent</p>
                </div>
              </div>
            </a>

            <a href="/knowledge-hub/ogte" className="read-more">
              <div className="department">
                <img src="path-to-ogt-icon.png" alt="OGT Icon" className="department-icon" />
                <div className="department-content">
                  <h3 className="department-title">OGTe</h3>
                  <p className="department-description">outgoing Global Teacher</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default KnowledgeHubBanner;
