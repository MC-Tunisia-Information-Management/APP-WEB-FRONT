import React, { useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./hubPages.css";
import upperimage from "../../assests/layerlayer.png";
import folderimage from "../../assests/folderimage.png";
import ellipse from "../../assests/Ellipse 8.png";
import pages from "./HubPages";
import { useParams } from "react-router-dom";

function HubPage() {
  let { hub } = useParams();
  useEffect(() => {});
  return (
    <>
      <NavBar />
      <section className="knowledgehub">
        <div className="knowledgehub-upper">
          <div>
            <img className="upperimage" src={upperimage} alt="" />
          </div>
          <div className="knowledgehub-upper-text-image-container">
            <div className="upper-text-container">
              <div className="knowledge-text-type1">{pages[hub].title}</div>
              <div className="flex-horizontal hubhub">
                <div className="knowledge-text-type1">HUB</div>
                <div className="knowledge-text-type2-container"></div>
              </div>
            </div>
            <div className="upper-image-container">
              <div>
                <img className="folder-image" src={folderimage} alt="" />
              </div>
              <img className="ellips-image" src={ellipse} alt="" />
            </div>
          </div>
        </div>
        <div className="middle-container">
          <div className="middle-part-title">THE BACK OFFICE</div>
          <div className="middle-part-content-container">
            <a
              href="https://example.com/marketing"
              target="_blank"
              className="card"
            >
              MARKETING
            </a>
            <a
              href="https://example.com/business-development"
              target="_blank"
              className="card"
            >
              BUSINESS DEVELOPMENT
            </a>
            <a
              href="https://example.com/finance-legalities"
              target="_blank"
              className="card"
            >
              FINANCE & LEGALITIES
            </a>
            <a
              href="https://example.com/talent-management"
              target="_blank"
              className="card"
            >
              TALENT MANAGEMENT
            </a>
            <a
              href="https://example.com/entity-control-board"
              target="_blank"
              className="card"
            >
              ENTITY CONTROL BOARD
            </a>
            <a
              href="https://example.com/organizational-development"
              target="_blank"
              className="card"
            >
              ORGANIZATIONAL DEVELOPMENT
            </a>
          </div>
        </div>
        <div className="middle-container">
          <div className="middle-part-title">THE FRONT OFFICE</div>
          <div className="middle-part-content-container">
            <a
              href="https://example.com/outgoing-global-talent"
              target="_blank"
              className="card"
            >
              OUTGOING GLOBAL TALENT
            </a>
            <a
              href="https://example.com/outgoing-global-teacher"
              target="_blank"
              className="card"
            >
              OUTGOING GLOBAL TEACHER
            </a>
            <a
              href="https://example.com/outgoing-global-volunteer"
              target="_blank"
              className="card"
            >
              OUTGOING GLOBAL VOLUNTEER
            </a>
            <a
              href="https://example.com/incoming-global-talent"
              target="_blank"
              className="card"
            >
              INCOMING GLOBAL TALENT
            </a>
            <a
              href="https://example.com/incoming-global-teacher"
              target="_blank"
              className="card"
            >
              INCOMING GLOBAL TEACHER
            </a>
            <a
              href="https://example.com/incoming-global-volunteer"
              target="_blank"
              className="card"
            >
              INCOMING GLOBAL VOLUNTEER
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HubPage;
