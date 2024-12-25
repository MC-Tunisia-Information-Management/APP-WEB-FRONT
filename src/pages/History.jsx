import React from "react";
import "../css/History.css";
import cover_5 from "../assests/Pictures/cover_2.png";
import conf1 from "../assests/Pictures/3.jpg";
import conf2 from "../assests/Pictures/5.jpg";
import conf3 from "../assests/Pictures/4.jpg";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const History = () => {
  const timeline = [
    {
      year: "1990",
      event: "Foundation of MC Tunisia",
      description:
        "The journey of MC Tunisia began with a vision to empower youth.",
      image: conf1,
    },
    {
      year: "2000",
      event: "Major Milestone",
      description:
        "Expanded reach and impact, achieving national recognition.",
      image: conf2,
    },
    {
      year: "2010",
      event: "Global Collaboration",
      description:
        "Partnered with international organizations for greater impact.",
      image: conf3,
    },
    {
      year: "2020",
      event: "Digital Transformation",
      description:
        "Adopted digital tools to enhance operations and member experience.",
      image: conf1,
    },
    {
      year: "2024",
      event: "Present Achievements",
      description:
        "Continuing to inspire and lead with innovative initiatives.",
      image: conf2,
    },
  ];

  return (
    <div>
      <NavBar />
      {/* Header Section */}
<div
  className="roadmap-header"
  style={{
    backgroundImage: `url(${cover_5})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="header-content">
    <h1 className="header-title">MC Tunisia Through Time</h1>
    <p className="header-description">
      Discover the milestones that shaped MC Tunisia, from its inception to the present day.
    </p>
  </div>
</div>

{/* Introduction Section */}
<div className="roadmap-intro">
  <h2 className="roadmap-intro-title">Our Journey</h2>
  <p className="roadmap-intro-text">
    MC Tunisia has grown and evolved over the decades, inspiring countless young leaders to shape a better future. 
    From humble beginnings to a digital transformation, our history is a testament to innovation, resilience, 
    and the power of collaboration.
  </p>
</div>

{/* Roadmap Section */}
<div className="roadmap-section">
  {timeline.map((item, index) => (
    <div
      key={index}
      className={`roadmap-item ${index % 2 === 0 ? "left" : "right"}`}
    >
      <div className="roadmap-content">
        <h2 className="roadmap-year">{item.year}</h2>
        <h3 className="roadmap-event">{item.event}</h3>
        <p className="roadmap-description">{item.description}</p>
      </div>
      <div
        className="roadmap-image"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
    </div>
  ))}
</div>
      <Footer />
    </div>
  );
};

export default History;
