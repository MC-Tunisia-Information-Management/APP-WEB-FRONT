import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "../css/mctunisia.css";
import mcimage from "../assests/MC HUSTLE/MC Hustle.jpg";
import MCP from "../assests/MC HUSTLE/MCP_NB.png";
import MCVP_BD from "../assests/MC HUSTLE/MCVP_BD_NB.png";
import MCVP_BXP from "../assests/MC HUSTLE/MCVP_BXP.png";
import MCVP_CXO from "../assests/MC HUSTLE/MCVP_CXO.png";
import MCVP_DM from "../assests/MC HUSTLE/MCVP_DM.png";
import MCVP_IGV from "../assests/MC HUSTLE/MCVP_IGV.png";
import MCVP_OD from "../assests/MC HUSTLE/MCVP_OD_NB.png";
import MCVP_OGT from "../assests/MC HUSTLE/MCVP_OGT.png";
import MCVP_OGV from "../assests/MC HUSTLE/MCVP_OGV.png";
import MCVP_PD from "../assests/MC HUSTLE/MCVP_PD.png";
import MCVP_IM from "../assests/MC HUSTLE/MCVP_IM.png";
import MCVP_TM from "../assests/MC HUSTLE/MCVP_TM.png";
import MCVP_FnL from "../assests/MC HUSTLE/MCVP_FnL.png";
import MCVP_IGT from "../assests/MC HUSTLE/MCVP_IGT.png";
import MCMembers from "../data/MCPages.json";
import MCOwn from "../assests/PreviousMCs/own.jpg";
import MCForce from "../assests/PreviousMCs/force.jpg";
import MCMyrath from "../assests/PreviousMCs/myrath.jpg";
import MCGenesis from "../assests/PreviousMCs/genesis.jpg";
import MCAim from "../assests/PreviousMCs/aim.png";
import MCHive from "../assests/PreviousMCs/hive.png";

import ReactGA from "react-ga4";
import Slider from "react-slick";



function MC() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/mc-tunisia",
      title: "MC Tunisia",
    });
  }, []);

  // Mapping image paths to member data
  const imageMapping = {
    MCP,
    MCVP_OD,
    MCVP_IM,
    MCVP_TM,
    MCVP_BXP,
    MCVP_DM,
    MCVP_CXO,
    MCVP_OGT,
    MCVP_OGV,
    MCVP_IGV,
    MCVP_IGT,
    MCVP_BD,
    MCVP_PD,
    MCVP_FnL,
  };

  // Mapping the MCMembers object to an array for rendering
  const teamMembers = [
    { img: MCP, name: "Azmi Abroug", position: "MCP" },
    { img: MCVP_OD, name: "Amine Ghariani", position: "MCVP OD" },
    { img: MCVP_IM, name: "Yosr Akrout", position: "MCVP IM" },
    { img: MCVP_TM, name: "Sihem Khlifi", position: "MCVP TM" },
    { img: MCVP_BXP, name: "Saif Kridene", position: "MCVP BXP" },
    { img: MCVP_DM, name: "Chirine Souidi", position: "MCVP DM" },
    { img: MCVP_CXO, name: "Yessine Nacef", position: "MCVP CXO" },
    { img: MCVP_OGT, name: "Imen Houmani", position: "MCVP OGT" },
    { img: MCVP_OGV, name: "Idriss Drissi", position: "MCVP OGV" },
    { img: MCVP_IGT, name: "Elyes Zarrad", position: "MCVP IGT" },
    { img: MCVP_IGV, name: "Rayan Jbali", position: "MCVP IGV" },
    { img: MCVP_BD, name: "Mouhib Benkhlifa", position: "MCVP BD&EWA" },
    { img: MCVP_PD, name: "Firas Atigui", position: "MCVP PD" },
    { img: MCVP_FnL, name: "Ilhem Abdellewi", position: "MCVP F&L" },

  ];
  const heroSliderSettings = {
    dots: true,
    infinite: false,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const teamSliderSettings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <div className="slick-prev">{""}</div>,
    nextArrow: <div className="slick-next">{""}</div>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const PreviousMCs = [
    { img: MCOwn, name: "MC Own", year: "23.24" },
    { img: MCForce, name: "MC Force", year: "22.23" },
    { img: MCMyrath, name: "MC Myrath", year: "21.22" },
    { img: MCGenesis, name: "MC Genesis", year: "20.21" },
    { img: MCAim, name: "MC Aim", year: "19.20" },
    { img: MCHive, name: "MC Hive", year: "18.19" },
  ];

  return (
    <>
      <NavBar className="navbarr" />
      <div className="hero-section">
        <Slider {...heroSliderSettings} className="hero-slider">
          <div className="hero-image-container">
            <img src={mcimage} alt="Hero Slide" className="hero-image" />
          </div>
        </Slider>
      </div>

      <div className="m-5">
        <div className="mc-name">MC HUSTLE</div>
      </div>

      <div className="first-container-mc">


        <div className="mc-history-1">
          <div className="row mx-5">
            <div className="col-md-3 col-sm-12 mb-3">
              <div className="flip-card">
                <div className="flip-card-inner ">
                  <div className="flip-card-front">
                    <div className="MC-way">The WHY</div>
                  </div>
                  <div className="flip-card-back">
                    Through hustle, values come to life, transforming challenges into opportunities and driving individuals and teams toward meaningful, lasting success and impact.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 mb-3">
              <div className="flip-card">
                <div className="flip-card-inner ">
                  <div className="flip-card-front">
                    <div className="MC-way">The WHO</div>
                  </div>
                  <div className="flip-card-back">
                  It reflects a commitment to growth both personal and collective while holding oneself accountable to the highest standards.

                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 mb-3">
              <div className="flip-card">
                <div className="flip-card-inner ">
                  <div className="flip-card-front">
                    <div className="MC-way">The HOW</div>
                  </div>
                  <div className="flip-card-back">
                  Hustle is about taking proactive steps, seizing opportunities, and maintaining a determined mindset in the face of challenges.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12 mb-3">
              <div className="flip-card ">
                <div className="flip-card-inner ">
                  <div className="flip-card-front">
                    <div className="MC-way">The WHAT</div>
                  </div>
                  <div className="flip-card-back">
                    Hustle is the relentless pursuit of excellence, driven by passion and purpose.<br />It's the fusion of hard work and smart work.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="mc-history">
          <div className="mc-history-text">Our Vision</div>
          <div className="row mx-5">
            <div className="col-md-4 col-sm-12 mb-3">
              <div className="mc-history-container">The eagle represents the soaring aspirations and resilience of Tunisia, a nation that has always risen above challenges with strength and determination. Just as the eagle soars high, Tunisia continues on it’s path to find to the glory it deserves.
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mb-3">
              <div className="mc-history-container">The eagle's relentless focus and determination mirror the essence of Hustle. Like an eagle that never hesitates to dive for its prey, Hustle is about taking decisive action, embracing challenges, and working tirelessly to achieve goals. It symbolizes the unwavering drive to push beyond limits and reach new heights.
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mb-3">
              <div className="mc-history-container">The eagle, known for enduring storms by flying above them, embodies the idea that "Pain is temporary, glory is eternal." Just as the eagle faces the storm head-on, understanding that it will eventually pass, we too must endure hardships with the knowledge that glory awaits on the other side.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mc-team-bloc">
        <div className="mc-team-text">Meet our MC</div>
        <div className="mc-slider">

        {/* Team Members Slider */}
        <Slider {...teamSliderSettings} className="team-slider">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-container">
              <img
                src={member.img}
                alt={member.name}
                className="team-member-img"
                />
              <div className="team-member-info">
              <h4>
              <Link to={`/mcvp/${index}`} className="team-member-link">
                    {member.name}
                    </Link>
                  </h4>
                  <p>{member.position}</p>
              </div>
            </div>
          ))}
        </Slider>
          </div>
      </div>

      <div className="first-container-mc">
        <div className="mc-name">Previous MC Teams</div>
        <Slider {...teamSliderSettings} className="team-slider">
          {PreviousMCs.map((MC, index) => (
            <div key={index} className="team-member-container">
              <img src={MC.img} alt={MC.name} className="team-member-img" />
              <div className="team-member-info">
                <h4>{MC.name}</h4>
                <p>{MC.year}</p>
              </div>  

            </div>
          ))}
        </Slider>
      </div>

      <hr />
      <Footer />
    </>
  );
}

export default MC;
