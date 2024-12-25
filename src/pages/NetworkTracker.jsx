import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "../css/networktracker.css";
import ReactGA from "react-ga4";
import network from "C:/Users/LENOVO/Desktop/APP-WEB-FRONT/src/assests/network.png"
function NetworkTracker() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/network-trackers",
      title: "Network Trackers",
    });
  });
  return (
    <>
      <NavBar/>
      {/* Banner Section */}
      <div className="banner">
      <h1>NETWORK TRACKER</h1>
      <img
              src={network}
              alt={`Hero Slide`}
              className="hero-image"
            />
      </div>

      <section className="knowledge">
        {/* Back Office Section */}
        <div className="back-section">
          <h2 className="back-title">Everything you need in one place</h2>

          <div className="dep-grid">
            {/* Example Department Card */}
            <div className="dep">
              
              <div className="dep-content">
                <h3 className="dep-title">Network Tracker S1</h3>
                <p className="dep-description">
                  Lorem Ipsum est simplement du faux texte employé dans la Le Lorem Ipsum est le faux texte standard de...
                </p>
                <a href="https://docs.google.com/spreadsheets/d/1flgEi9EyQl6cHoZk87KrKcmg6owssrolGR2HLMHzbIo/edit#gid=74829231" className="read-more">Read more</a>
              </div>
            </div>

            {/* Other Department Cards */}
            <div className="dep">
             
              <div className="dep-content">
                <h3 className="dep-title">Network Tracker S2</h3>
                <p className="dep-description">
                  Lorem Ipsum est simplement du faux texte employé dans la Le Lorem Ipsum est le faux texte standard de...
                </p>
                <a href="https://docs.google.com/spreadsheets/d/13_DoZK7DHOPGQvLwDcultqorlOuQO8lF1AQ_ywwKZpc/edit#gid=1234857507" className="read-more">Read more</a>
              </div>
            </div>

            <div className="dep">
              
              <div className="dep-content">
                <h3 className="dep-title">IR Insight Tool</h3>
                <p className="dep-description">
                  Lorem Ipsum est simplement du faux texte employé dans la Le Lorem Ipsum est le faux texte standard de...
                </p>
                <a href="https://docs.google.com/spreadsheets/d/1vmkGkrrkEovxjpVpR9z16c4xTOX6nAqHgn2aDC7WuN0/edit#gid=462857284" className="read-more">Read more</a>
              </div>
            </div>

            <div className="dep">
            
              <div className="dep-content">
                <h3 className="dep-title">Hackathon tracker</h3>
                <p className="dep-description">
                  Lorem Ipsum est simplement du faux texte employé dans la Le Lorem Ipsum est le faux texte standard de...
                </p>
                <a href="https://docs.google.com/spreadsheets/d/182xauomWs5YFsSFiSmvQY9iSWMx7PSnvCIBKhiCk0hI/edit#gid=699511709" className="read-more">Read more</a>
              </div>
            </div>
            <div className="dep">
            
              <div className="dep-content">
                <h3 className="dep-title">AiT Roadmap</h3>
                <p className="dep-description">
                  Lorem Ipsum est simplement du faux texte employé dans la Le Lorem Ipsum est le faux texte standard de...
                </p>
                <a href="https://docs.google.com/presentation/d/1pjM__MOhb3SdHGBlYPUAw06GoXdM8M-AqGMiiV-0GEk/edit#slide=id.g2773f8dd6e6_1_96" className="read-more">Read more</a>
              </div>
            </div> 
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NetworkTracker;
