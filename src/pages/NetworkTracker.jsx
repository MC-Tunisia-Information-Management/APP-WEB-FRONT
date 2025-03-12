import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "../css/networktracker.css";
import ReactGA from "react-ga4";
import network from "../assests/network.png"
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
      {}
      <div className="banner">
      <h1>NETWORK TRACKER</h1>
      <img
              src={network}
              alt={`Hero Slide`}
              className="hero-image"
            />
      </div>

      <section className="knowledge">
        {}
        <div className="back-section">
        <div className="hub-page-title">Everything you need in one place</div>

          <div className="dep-grid">
            {}
            <div className="dep">
              
              <div className="dep-content">
                <h3 className="dep-title">Network Tracker S1</h3>
                <p className="dep-description">
                First semester of 23-24 - MC OWN                </p>
                <a href="https://docs.google.com/spreadsheets/d/1flgEi9EyQl6cHoZk87KrKcmg6owssrolGR2HLMHzbIo/edit#gid=74829231" className="read-more" target="_blank">Read more</a>
              </div>
            </div>

            {}
            <div className="dep">
             
              <div className="dep-content">
                <h3 className="dep-title">Network Tracker S2</h3>
                <p className="dep-description">
                2nd semester of 23-24 - MC OWN
                </p>
                <a href="https://docs.google.com/spreadsheets/d/13_DoZK7DHOPGQvLwDcultqorlOuQO8lF1AQ_ywwKZpc/edit#gid=1234857507" className="read-more" target="_blank">Read more</a>
              </div>
            </div>

            <div className="dep">
              
              <div className="dep-content">
                <h3 className="dep-title">IR Insight Tool</h3>
                <p className="dep-description">
                Get insights about our IR
                </p>
                <a href="https://docs.google.com/spreadsheets/d/1vmkGkrrkEovxjpVpR9z16c4xTOX6nAqHgn2aDC7WuN0/edit#gid=462857284" className="read-more" target="_blank">Read more</a>
              </div>
            </div>

            <div className="dep">
            
              <div className="dep-content">
                <h3 className="dep-title">Hackathon tracker</h3>
                <p className="dep-description">
                Results & output
                </p>
                <a href="https://docs.google.com/spreadsheets/d/182xauomWs5YFsSFiSmvQY9iSWMx7PSnvCIBKhiCk0hI/edit#gid=699511709" className="read-more" target="_blank">Read more</a>
              </div>
            </div>
            <div className="dep">
            
              <div className="dep-content">
                <h3 className="dep-title">AiT Roadmap</h3>
                <p className="dep-description">
                3 terms roadmap output
                </p>
                <a href="https://docs.google.com/presentation/d/1pjM__MOhb3SdHGBlYPUAw06GoXdM8M-AqGMiiV-0GEk/edit#slide=id.g2773f8dd6e6_1_96" className="read-more" target="_blank">Read more</a>
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
