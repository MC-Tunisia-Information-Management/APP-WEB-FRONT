import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./hubPages.css";
import upperimage from "../../assests/layerlayer.png";
import folderimage from "../../assests/folderimage.png";
import ellipse from "../../assests/Ellipse 8.png";
import pages from "./HubPages";
import { Link, useParams } from "react-router-dom";
import ReactGA from "react-ga4";

function HubPage() {
  let { hub } = useParams();
  let [page] = useState(pages[hub]);
  let [image, setImage] = useState("");
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: `/knowledge-hub/${hub}`,
      title: `${hub} Knowledge Hub`,
    });
    setImage(require(`../../assests/${pages[hub]["image"]}`));
  }, [hub]);
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
                <img className="folder-image" src={image} alt="" />
              </div>
              <img className="ellips-image" src={ellipse} alt="" />
            </div>
          </div>
        </div>
        <div className="networktracker-content-container">
          {page["content"] ? (
            page["content"].map((ele, id) => {
              return (
                <Link key={id} to={ele.link} className="networktracker-card">
                  <div className="networktracker-card-upper card-upper-1">
                    {ele.title}
                  </div>
                  <div className="networktracker-card-title card-title-1">
                    {ele.subtitle}
                  </div>
                </Link>
              );
            })
          ) : (
            <></>
          )}
          {/* <Link
            to="https://docs.google.com/spreadsheets/d/1flgEi9EyQl6cHoZk87KrKcmg6owssrolGR2HLMHzbIo/edit#gid=74829231"
            className="networktracker-card"
          >
            <div className="networktracker-card-upper card-upper-1">
              Network Tracker S1
            </div>
            <div className="networktracker-card-title card-title-1">
              First semester of 23-24 - MC OWN
            </div>
          </Link> */}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HubPage;
