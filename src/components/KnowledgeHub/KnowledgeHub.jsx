import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./knowledgehub.css";
import upperimage from "../../assests/layerlayer.png";
import folderimage from "../../assests/folderimage.png";
import ellipse from "../../assests/Ellipse 8.png";
import { Link } from "react-router-dom";

function KnowledgeHub() {
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
              <div className="knowledge-text-type1">KNOWLEDGE</div>
              <div className="flex-horizontal hubhub">
                <div className="knowledge-text-type1">HUB</div>
                <div className="knowledge-text-type2-container">
                  <div className="knowledge-text-type2">EVERYTHING YOU</div>
                  <div className="knowledge-text-type2">NEED IN ONE PLACE.</div>
                </div>
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
            <Link to="/knowledge-hub/mkt" className="card">
              MARKETING
            </Link>
            <Link to="/knowledge-hub/bd" className="card">
              BUSINESS DEVELOPMENT
            </Link>
            <Link to="/knowledge-hub/fnl" className="card">
              FINANCE & LEGALITIES
            </Link>
            <Link to="/knowledge-hub/tm" className="card">
              TALENT MANAGEMENT
            </Link>
            <Link to="/knowledge-hub/ecb" className="card">
              ENTITY CONTROL BOARD
            </Link>
            <Link to="/knowledge-hub/od" className="card">
              ORGANIZATIONAL DEVELOPMENT
            </Link>
          </div>
          <svg
            width="1740"
            className="line1"
            height="240"
            viewBox="0 0 1740 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-25 237.644C-25 237.644 700 -100 1000 50C1300 200 2000 137.553 2000 137.553"
              stroke="white"
              strokeWidth="10"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="1740"
            className="line2"
            height="240"
            viewBox="0 0 1740 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-25 237.644C-25 237.644 700 -100 1000 50C1300 200 2000 137.553 2000 137.553"
              stroke="white"
              strokeWidth="10"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="middle-container">
          <div className="middle-part-title">THE FRONT OFFICE</div>
          <div className="middle-part-content-container">
            <Link to="/knowledge-hub/ogta" className="card">
              OUTGOING GLOBAL TALENT
            </Link>
            <Link to="/knowledge-hub/ogte" className="card">
              OUTGOING GLOBAL TEACHER
            </Link>
            <Link to="/knowledge-hub/ogv" className="card">
              OUTGOING GLOBAL VOLUNTEER
            </Link>
            <Link to="/knowledge-hub/igta" className="card">
              INCOMING GLOBAL TALENT
            </Link>
            <Link to="/knowledge-hub/igte" className="card">
              INCOMING GLOBAL TEACHER
            </Link>
            <Link to="/knowledge-hub/igv" className="card">
              INCOMING GLOBAL VOLUNTEER
            </Link>
          </div>
          <svg
            width="1740"
            className="line1"
            height="240"
            viewBox="0 0 1740 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-25 237.644C-25 237.644 700 -100 1000 50C1300 200 2000 137.553 2000 137.553"
              stroke="white"
              strokeWidth="10"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="1740"
            className="line2"
            height="240"
            viewBox="0 0 1740 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-25 237.644C-25 237.644 700 -100 1000 50C1300 200 2000 137.553 2000 137.553"
              stroke="white"
              strokeWidth="10"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default KnowledgeHub;
