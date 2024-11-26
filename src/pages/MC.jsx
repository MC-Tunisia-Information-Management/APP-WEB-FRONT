import React, { useEffect } from "react";
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

import MCOwn from "../assests/PreviousMCs/own.jpg";
import MCForce from "../assests/PreviousMCs/force.jpg";
import MCMyrath from "../assests/PreviousMCs/myrath.jpg";
import MCGenesis from "../assests/PreviousMCs/genesis.jpg";
import MCAim from "../assests/PreviousMCs/aim.png";
import MCHive from "../assests/PreviousMCs/hive.png";

import ReactGA from "react-ga4";
import Slider from "react-slick";

function MC() {
  // const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/mc-tunisia",
      title: "MC Tunisia",
    });
  }, []);

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
    prevArrow: <div className="slick-prev">{""}</div>, // Custom previous arrow
    nextArrow: <div className="slick-next">{""}</div>, // Custom next arrow
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
        {/* Hero Slider */}
        <Slider {...heroSliderSettings} className="hero-slider">
          <div className="hero-image-container">
            <img
              src={mcimage}
              alt={`Hero Slide`}
              className="hero-image"
            />
          </div>
        </Slider>
      </div>

      <div className="m-5">
        <div className="mc-name">MC TUNISIA</div>
      </div>

      <div className="first-container-mc">
        <div className="mc-text">
          Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
          Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur
          anonyme assembla ensemble des.
        </div>

        <div className="mc-history">
          <div className="mc-history-text">Our Stand</div>
          <div className="row mx-5">
            <div className="col-md-4 col-sm-12 mb-3">
              <div className="mc-history-container">
                {/* Content for first container */}
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mb-3">
              <div className="mc-history-container">
                {/* Content for second container */}
              </div>
            </div>
            <div className="col-md-4 col-sm-12 mb-3">
              <div className="mc-history-container">
                {/* Content for third container */}
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
                <h4>{member.name}</h4>
                <p>{member.position}</p>
              </div>
            </div>
          ))}
        </Slider>
          </div>
      </div>
      <div className="first-container-mc">
        <div className="mc-name">Previous MC Teams</div>
        <div className="p-1"></div>
        <div className="mc-slider">

        {/* Team Members Slider */}
        <Slider {...teamSliderSettings} className="team-slider">
          {PreviousMCs.map((MC, index) => (
            <div key={index} className="team-member-container">
              <img
                src={MC.img}
                alt={MC.name}
                className="team-member-img"
                />
              <div className="team-member-info">
                <h4>{MC.name}</h4>
                <p>{MC.year}</p>
              </div>
            </div>
          ))}
        </Slider>
          </div>
      </div>

      <hr />
      <Footer />
    </>
  );
}

export default MC;
