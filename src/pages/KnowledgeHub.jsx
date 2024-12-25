import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "../css/knowledgehub.css"; // Ensure this file includes styling for the updated layout
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";
/*import mcimage from "../assests/MC HUSTLE/MC Hustle.jpg";*/
import MaktIcon from "C:/Users/LENOVO/Desktop/APP-WEB-FRONT/src/assests/makt.png";
import BDIcon from "C:/Users/LENOVO/Desktop/APP-WEB-FRONT/src/assests/BDD..png";
import ECIcon from "C:/Users/LENOVO/Desktop/APP-WEB-FRONT/src/assests/ecb.png";
import ODIcon from "C:/Users/LENOVO/Desktop/APP-WEB-FRONT/src/assests/OD..png";
import TMtIcon from "C:/Users/LENOVO/Desktop/APP-WEB-FRONT/src/assests/TM..png";
import FIcon from "C:/Users/LENOVO/Desktop/APP-WEB-FRONT/src/assests/FF.png";
import knowledge from "C:/Users/LENOVO/Desktop/APP-WEB-FRONT/src/assests/KNOWLEDGE.jpg";

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
      {/* Banner Section */}
      <div className="banner">
            <img
              src={knowledge}
              alt={`Hero Slide`}
              className="hero-image"
            />
      </div>

      <section className="knowledgehub">
        {/* Back Office Section */}
        <div className="back-office-section">
          <h2 className="back-office-title">The Back Office</h2>
          <div className="departments-grid">
            {/* Example Department Card */}
            <div className="department">
              <img src={MaktIcon} alt="mkt" className="department-icon" />
              <div className="department-content">
                <h3 className="department-title">Marketing</h3>
                <p className="department-description">
                  Lorem Ipsum est simplement du faux texte employé dans la Le Lorem Ipsum est le faux texte standard de...
                </p>
                <a href="/knowledge-hub/mkt" className="read-more">Read more</a>
              </div>
            </div>

            {/* Other Department Cards */}
            <div className="department">
              <img src={BDIcon} alt="BD Icon" className="department-icon" />
              <div className="department-content">
                <h3 className="department-title">BD</h3>
                <p className="department-description">
                  Lorem Ipsum est simplement du faux texte employé dans la Le Lorem Ipsum est le faux texte standard de...
                </p>
                <a href="/knowledge-hub/bd" className="read-more">Read more</a>
              </div>
            </div>

            <div className="department">
              <img src={FIcon} alt="F&L Icon" className="department-icon" />
              <div className="department-content">
                <h3 className="department-title">F&L</h3>
                <p className="department-description">
                  Lorem Ipsum est simplement du faux texte employé dans la Le Lorem Ipsum est le faux texte standard de...
                </p>
                <a href="/knowledge-hub/fnl" className="read-more">Read more</a>
              </div>
            </div>

            <div className="department">
              <img src={TMtIcon} alt="TM Icon" className="department-icon" />
              <div className="department-content">
                <h3 className="department-title">TM</h3>
                <p className="department-description">
                  Lorem Ipsum est simplement du faux texte employé dans la Le Lorem Ipsum est le faux texte standard de...
                </p>
                <a href="/knowledge-hub/tm" className="read-more">Read more</a>
              </div>
            </div>
            <div className="department">
              <img src={ECIcon} alt="TM Icon" className="department-icon" />
              <div className="department-content">
                <h3 className="department-title">ECB</h3>
                <p className="department-description">
                  Lorem Ipsum est simplement du faux texte employé dans la Le Lorem Ipsum est le faux texte standard de...
                </p>
                <a href="/knowledge-hub/ecb" className="read-more">Read more</a>
              </div>
            </div>
            <div className="department">
              <img src={ODIcon} alt="TM Icon" className="department-icon" />
              <div className="department-content">
                <h3 className="department-title">OD</h3>
                <p className="department-description">
                  Lorem Ipsum est simplement du faux texte employé dans la Le Lorem Ipsum est le faux texte standard de...
                </p>
                <a href="/knowledge-hub/od" className="read-more">Read more</a>
              </div>
            </div>
          </div>
        </div>

        {/* Front Office Section */}
        <div className="front-office-section">
          <h2 className="front-office-title">The Front Office</h2>
          <div className="departments-grid">
            {/* Example Front Office Card */}
            <div className="department">
              <img src="path-to-igt-icon.png" alt="IGT Icon" className="department-icon" />
              <div className="department-content">
                <h3 className="department-title">IGTa</h3>
                <p className="department-description">Lorem Ipsum est simplement du faux texte employé dans la Le Lorem Ipsum est le faux texte standard de...</p>
                <a href="/knowledge-hub/igta" className="read-more">Read more</a>
              </div>
            </div>

            <div className="department">
              <img src="path-to-icv-icon.png" alt="ICV Icon" className="department-icon" />
              <div className="department-content">
                <h3 className="department-title">IGte</h3>
                <p className="department-description">Lorem Ipsum est simplement du faux texte employé dans la Le Lorem Ipsum est le faux texte standard de...</p>
                <a href="/knowledge-hub/igte" className="read-more">Read more</a>
              </div>
            </div>
            <div className="department">
              <img src="path-to-icv-icon.png" alt="ICV Icon" className="department-icon" />
              <div className="department-content">
                <h3 className="department-title">IGV</h3>
                <p className="department-description">Lorem Ipsum est simplement du faux texte employé dans la Le Lorem Ipsum est le faux texte standard de...</p>
                <a href="/knowledge-hub/igv" className="read-more">Read more</a>
              </div>
            </div>
            <div className="department">
              <img src="path-to-icv-icon.png" alt="ICV Icon" className="department-icon" />
              <div className="department-content">
                <h3 className="department-title">OGV</h3>
                <p className="department-description">Lorem Ipsum est simplement du faux texte employé dans la Le Lorem Ipsum est le faux texte standard de...</p>
                <a href="/knowledge-hub/ogv" className="read-more">Read more</a>
              </div>
            </div>

            <div className="department">
              <img src="path-to-ogv-icon.png" alt="OGV Icon" className="department-icon" />
              <div className="department-content">
                <h3 className="department-title">OGTa</h3>
                <p className="department-description">Lorem Ipsum est simplement du faux texte employé dans la Le Lorem Ipsum est le faux texte standard de...</p>
                <a href="/knowledge-hub/ogta" className="read-more">Read more</a>
              </div>
            </div>

            <div className="department">
              <img src="path-to-ogt-icon.png" alt="OGT Icon" className="department-icon" />
              <div className="department-content">
                <h3 className="department-title">OGTe</h3>
                <p className="department-description">Lorem Ipsum est simplement du faux texte employé dans la Le Lorem Ipsum est le faux texte standard de...</p>
                <a href="/knowledge-hub/ogte" className="read-more">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default KnowledgeHubBanner;
