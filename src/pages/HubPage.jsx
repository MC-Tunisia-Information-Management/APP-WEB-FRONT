import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import "../css/hubPages.css";
import pages from "../data/HubPages";
import { useParams } from "react-router-dom";
import ReactGA from "react-ga4";

function HubPage() {
  const { hub } = useParams();
  const [page, setPage] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (pages[hub]) {
      const hubPage = pages[hub];
      setPage(hubPage);

      try {
        const img = require(`../assests/${hubPage.image}`);
        setImage(img);
      } catch (error) {
        console.error(`Error loading image: ${hubPage.image}`, error);
        setImage(""); // Fallback to an empty image or placeholder if needed
      }

      ReactGA.send({
        hitType: "pageview",
        page: `/knowledge-hub/${hub}`,
        title: `${hub} Knowledge Hub`,
        customProps: { side: hubPage.side },
      });
    }
  }, [hub]);

  if (!page) {
    return <div>Page not found</div>;
  }

  return (
    <>
      <NavBar />
      <div className="hub-page-hero row">
        <div className="hub-page-hero-left-half col-md-6 col-sm-12 p-5">
          <div className="hub-page-hero-side">{page.side}</div>
          <div className="hub-page-hero-title">{page.title}</div>
        </div>
        <div className="hub-page-hero-image col-md-6 col-sm-12">
          {image && <img src={image} alt={page.title} />}
        </div>
      </div>

      <hr />
      <div className="hub-page-content">
        <div className="hub-page-title">Everything you need in one place</div>
        {page.content && page.content.length > 0 ? (
          <div className="hub-page-resources row g-3">
            {page.content.map((item, index) => (
              <div
                key={index}
                className="hub-page-resource-item m-5 col-12 col-sm-6 col-md-3"
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <div className="hub-page-resource-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="hub-page-resource-title">{item.title}</div>
                  <div className="hub-page-resource-subtitle">{item.subtitle}</div>
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div>No additional content available.</div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default HubPage;
