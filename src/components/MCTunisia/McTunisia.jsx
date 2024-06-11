import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./mctunisia.css";
import upperimage from "../../assests/layerlayer.png";
import mcimage from "../../assests/MCpic.png";
import ReactSimplyCarousel from "react-simply-carousel";
import { useState } from "react";
import boumiza from "../../assests/boumiza.jpg";
import mhiri from "../../assests/mhiri.jpg";
import hamma from "../../assests/hamma.jpg";

function McTunisia() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

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
              <div class="image-container">
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
              updateOnItemClick={true}
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
                children: <span>{`>`}</span>,
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
                children: <span>{`<`}</span>,
              }}
              responsiveProps={[
                {
                  itemsToShow: 4,
                  itemsToScroll: 1,
                  minWidth: 768,
                },
              ]}
              speed={200}
            >
              {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
              <div className="mc-carousel-card">
                <img src={boumiza} alt="MCVP IM" />
                <p className="mc-position">
                  Oussema Boumiza
                  <br />
                  <span style={{ color: "#646A69" }}>MCVP IM</span>
                </p>
              </div>
              <div className="mc-carousel-card">
                <img src={mhiri} alt="MCVP IM" />
                <p className="mc-position">
                  Amine Mhiri
                  <br />
                  <span style={{ color: "#646A69" }}>MCVP BD</span>
                </p>
              </div>
              <div className="mc-carousel-card">
                <img src={hamma} alt="MCVP IM" />
                <p className="mc-position">
                  Hamma Lahouar
                  <br />
                  <span style={{ color: "#646A69" }}>MCP</span>
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
