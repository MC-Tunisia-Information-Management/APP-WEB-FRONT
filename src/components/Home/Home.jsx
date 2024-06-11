import React from "react";
import "./home.css";
import NavBar from "../NavBar/NavBar";
import homePageImage from "../../assests/home-page-image-finish.png";
import tunisiaflag from "../../assests/tunisia.png";
import Footer from "../Footer/Footer";
import cursor from "../../assests/cursor.png";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Home() {
  return (
    <>
      <section className="flex-vertical home">
        <NavBar />
        <div className="flex-horizontal home-main-page">
          <div className="flex-vertical home-main-page-left">
            <div>
              <div>
                <div className="home-main-page-text-type1">WELCOME TO</div>
                <div className="home-main-page-text-type2">AIESEC</div>
              </div>
              <div></div>
            </div>
            <div className="home-main-page-text-type2">IN TUNISIA</div>
            <div className="flag-hub">
              <div className="home-main-page-text-type1">OFFICIAL HUB</div>
              <img className="home-page-flag" src={tunisiaflag} alt="" />
            </div>
          </div>
          <div className="flex-center home-page-image-container">
            <img className="home-page-image" src={homePageImage} alt="" />
          </div>
        </div>
        <div className="search">
          <div></div>
          <div></div>
          <div className="search-container">
            <div>
              <div className="konnect1">CAN'T FIND SOMETHING?</div>
              <div className="konnect2">TRY SEARCHING FOR IT BELOW!</div>
            </div>
            <div className="search-input-container">
              <img src="" alt="" />
              <input
                className="search-input"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="flex-horizontal social-media">
          <div>
            <div className="social-media-left">
              STAY UPDATED WITH OUR LATEST <br />
              NEWS, EVENTS, AND INSIGHTS <br />
            </div>
            <div className="social-media-left-last-line">
              BY FOLLOWING US ON SOCIAL MEDIA.
            </div>
          </div>

          <div className="social-media-links-container">
            <div className="flex-horizontal social-media-links">
              <div className="logoo">
                <AiFillFacebook className="social-media-links-logo" />
              </div>
              <div className="texxt">
                <div className="social-media-links-text">AIESEC in Tunisia</div>
              </div>
            </div>
            <div className="flex-horizontal social-media-links">
              <div className="logoo">
                <AiFillInstagram className="social-media-links-logo" />
              </div>
              <div className="texxt">
                <div className="social-media-links-text">aiesecintunisia</div>
              </div>
            </div>
            <div className="flex-horizontal social-media-links">
              <div className="logoo">
                <AiFillLinkedin className="social-media-links-logo" />
              </div>
              <div className="texxt">
                <div className="social-media-links-text">AIESEC Tunisia</div>
              </div>
            </div>
          </div>
          <div>
            <img className="cursor-home-page" src={cursor} alt="" />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Home;
