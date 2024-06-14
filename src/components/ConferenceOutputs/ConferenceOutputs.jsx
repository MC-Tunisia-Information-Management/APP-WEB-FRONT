import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./conferenceoutputs.css";
import upperimage from "../../assests/layerlayer.png";
import conferenceoutputsimage from "../../assests/conferenceoutputsimage.png";
import hexagon from "../../assests/hexagon.png";
import ReactGA from "react-ga4";

function ConferenceOutputs() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/conference-outputs",
      title: "Conference Outputs",
    });
  });
  // Define conference data with titles and corresponding external links
  const conferenceData = [
    {
      title: "Term 22-23 - MC Force",
      link: "https://drive.google.com/drive/folders/1_muAVD5eSKFKbu7ml1cww9ur3HRwmIfk?usp=drive_link",
    },
    {
      title: "Term 21-22 - MC Myrath",
      link: "https://drive.google.com/drive/folders/1NTl0Jq8DBo2OJJ_qRs5r6y3xb32nTRDG?usp=drive_link",
    },
    {
      title: "Term 20-21 - MC Genisis",
      link: "https://drive.google.com/drive/folders/180NUi623Xjj5sHjbyFiLv77ltwzn3PK1?usp=drive_link",
    },
  ];

  return (
    <>
      <NavBar className="navbarr" />
      <section className="conferenceouputs">
        <div className="conferenceouputs-upper">
          <div>
            <img className="upperimage" src={upperimage} alt="" />
          </div>
          <div className="conferenceouputs-upper-text-image-container">
            <div className="upper-text-container">
              <div className="conferenceouputs-text-type1">CONFERENCE</div>
              <div className="conferenceouputs-text-type1">OUTPUTS</div>
            </div>
            <div className="upper-image-container">
              <div className="image-hex-contianer">
                <img
                  className="folder-image"
                  src={conferenceoutputsimage}
                  alt=""
                />
                <img className="hex-image" src={hexagon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className="conference-cards-container">
          {/* Map through conference data to create cards */}
          {conferenceData.map((conference, index) => (
            <div className="conference-card" key={index}>
              <a
                href={conference.link}
                target="_blank"
                rel="noopener noreferrer"
                className="conference-card-link"
              >
                <div
                  className="conference-card-upper"
                  style={{
                    fontFamily: "Lato",
                    fontStyle: "normal",
                    fontWeight: 900,
                    fontSize: "48px",
                    lineHeight: "140%",
                    color: "#FFFFFF",
                    textDecoration: "none",
                  }}
                >
                  {conference.title}
                </div>
                <div className="conference-card-title">{conference.title}</div>
              </a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ConferenceOutputs;
