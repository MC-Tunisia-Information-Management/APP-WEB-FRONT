import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./mctunisia.css";
import upperimage from "../../assests/layerlayer.png";
import mcimage from "../../assests/MCpic.png";
import ReactSimplyCarousel from "react-simply-carousel";
import boumiza from "../../assests/MC Pictures/boumiza.jpg";
import mhiri from "../../assests/MC Pictures/mhiri.jpg";
import chaima from "../../assests/MC Pictures/chaima.jpg";
import hamma from "../../assests/MC Pictures/hamma.jpg";
import azmi from "../../assests/MC Pictures/azmi.jpg";
import boughi from "../../assests/MC Pictures/boughi.jpg";
import lamis from "../../assests/MC Pictures/lamis.jpg";
import nacef from "../../assests/MC Pictures/nacef.jpg";
import slim from "../../assests/MC Pictures/slim.jpg";
import hiba from "../../assests/MC Pictures/hiba.jpg";
import eya from "../../assests/MC Pictures/eya.jpg";
import ReactGA from "react-ga4";

function McTunisia() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/mc-tunisia",
      title: "MC Tunisia",
    });
  }, []);

  return (
    <>
      <NavBar className="navbarr" />
      <section className="mctunsia">
        <div className="mctunsia-upper">
          <div>
            <img className="upperimage" src={upperimage} alt="" />
          </div>
          <div className="mctunsia-upper-text-image-container">
            <div className="upper-text-container">
              <div className="mctunsia-text-type1">MC Tunisia</div>
            </div>
            <div className="upper-image-container">
              <div className="circle"></div>
              <div className="image-container">
                <img className="mc-image" src={mcimage} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="middle-container-mc">
          <div className="middle-part-title-mc">ONWARD WE NAVIGATE</div>
          <div className="mc-stand">MC 23.24 STAND</div>
          <div className="middle-part-content-container-mc">
            <div className="middle-mc-card">
              <div>Onward</div>
              <div className="mc-card-content">
                This word represents the direction and momentum that MC OWN aims
                to maintain. It signifies progress, growth, and a constant
                movement towards achieving the goals and vision set for the
                organization.
                <br />
                <br />
                It emphasize the importance of looking ahead, staying proactive,
                and continuously striving for improvement.
              </div>
            </div>
            <div className="middle-mc-card">
              <div>We</div>
              <div className="mc-card-content">
                "We" emphasizes the collective effort and collaboration within
                the organization.
                <br />
                <br />
                It signifies that the journey is not undertaken by one
                individual alone, but by a united team of passionate members
                working together towards a common purpose.
                <br />
                <br />
                It reflects our belief in the power of teamwork, inclusion, and
                diversity of thought to drive positive change.
              </div>
            </div>
            <div className="middle-mc-card">
              <div>Navigate</div>
              <div className="mc-card-content">
                "Navigate" implies that there may be challenges and
                uncertainties along the way, but with strong leadership and
                adaptability, the organization can overcome obstacles and find
                the best path forward.
                <br />
                <br />
                It shows our commitment to agile decision-making, effective
                problem-solving, and the ability to lead the organization
                towards success even in complex situations.
              </div>
            </div>
          </div>
        </div>
        <div className="middle-container-mc">
          <div className="middle-part-title-mc">MEET THE MC TEAM</div>
          <div className="middle-part-subtitle-mc">MC OWN</div>
          <div className="carousel-container">
            <ReactSimplyCarousel
              className="carousel-container"
              activeSlideIndex={activeSlideIndex}
              onRequestChange={setActiveSlideIndex}
              itemsToShow={1}
              itemsToScroll={1}
              forwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                style: {
                  alignSelf: "center",
                  background: "black",
                  border: "none",
                  borderRadius: "50%",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "20px",
                  height: 30,
                  lineHeight: 1,
                  textAlign: "center",
                  width: 30,
                },
                children: (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                  </span>
                ),
              }}
              backwardBtnProps={{
                //here you can also pass className, or any other button element attributes
                style: {
                  alignSelf: "center",
                  background: "black",
                  border: "none",
                  borderRadius: "50%",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "20px",
                  height: 30,
                  lineHeight: 1,
                  textAlign: "center",
                  width: 30,
                },
                children: (
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                      />
                    </svg>
                  </span>
                ),
              }}
              responsiveProps={[
                {
                  itemsToShow: 4,
                  itemsToScroll: 1,
                  minWidth: 768,
                },
              ]}
              speed={600}
              easing="ease"
            >
              <div className="mc-carousel-card">
                <img src={hamma} alt="MCP" />
                <p className="mc-position">
                  Hamma Lahouar
                  <br />
                  <span style={{ color: "#646A69" }}>MCP</span>
                </p>
              </div>
              <div className="mc-carousel-card">
                <img src={azmi} alt="MCVP OD" />
                <p className="mc-position">
                  Azmi Abroug
                  <br />
                  <span style={{ color: "#646A69" }}>MCVP OD</span>
                </p>
              </div>
              <div className="mc-carousel-card">
                <img src={boumiza} alt="MCVP IM" />
                <p className="mc-position">
                  Oussema Boumiza
                  <br />
                  <span style={{ color: "#646A69" }}>MCVP IM</span>
                </p>
              </div>
              <div className="mc-carousel-card">
                <img src={boughi} alt="MCVP TM" />
                <p className="mc-position">
                  Ahmed Boughizene
                  <br />
                  <span style={{ color: "#646A69" }}>MCVP TM</span>
                </p>
              </div>
              <div className="mc-carousel-card">
                <img src={chaima} alt="MCVP MKT" />
                <p className="mc-position">
                  Chaima Sassi
                  <br />
                  <span style={{ color: "#646A69" }}>MCVP MKT</span>
                </p>
              </div>
              <div className="mc-carousel-card">
                <img src={lamis} alt="MCVP OGT" />
                <p className="mc-position">
                  Lamis Redissi
                  <br />
                  <span style={{ color: "#646A69" }}>MCVP OGT</span>
                </p>
              </div>
              <div className="mc-carousel-card">
                <img src={nacef} alt="MCVP OGV" />
                <p className="mc-position">
                  Yassine Nacef
                  <br />
                  <span style={{ color: "#646A69" }}>MCVP OGV</span>
                </p>
              </div>
              <div className="mc-carousel-card">
                <img src={slim} alt="MCVP IGT" />
                <p className="mc-position">
                  Slim Labassi
                  <br />
                  <span style={{ color: "#646A69" }}>MCVP IGT</span>
                </p>
              </div>
              <div className="mc-carousel-card">
                <img src={hiba} alt="MCVP IGV" />
                <p className="mc-position">
                  Hiba Laatiri
                  <br />
                  <span style={{ color: "#646A69" }}>MCVP IGV</span>
                </p>
              </div>
              <div className="mc-carousel-card">
                <img src={mhiri} alt="MCVP BD&EWA" />
                <p className="mc-position">
                  Amine Mhiri
                  <br />
                  <span style={{ color: "#646A69" }}>MCVP BD&EWA</span>
                </p>
              </div>
              <div className="mc-carousel-card">
                <img src={eya} alt="MCVP F&L" />
                <p className="mc-position">
                  Eya Achour
                  <br />
                  <span style={{ color: "#646A69" }}>MCVP F&L</span>
                </p>
              </div>
            </ReactSimplyCarousel>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default McTunisia;
