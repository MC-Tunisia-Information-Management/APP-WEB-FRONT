import React from "react";
import "../css/ConferencesOutputsPage.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import cover_5 from "../assests/Pictures/conf.jpg";
import conf1 from "../assests/Pictures/7.jpg";
import conf2 from "../assests/Pictures/5.jpg";
import conf3 from "../assests/Pictures/4.jpg";

const ConferencePage = () => {
  const conferences = [
    {
      name: "Term 22-23 - MC Force",
      image: conf1,
      buttons: [
        { label: "SummerCo 2K22", link: "https://drive.google.com/drive/folders/1ncXaKCsKgUTWAR71NEuc_zVo_WIvikI8" },
        { label: "StartUp 2K22", link: "https://drive.google.com/drive/folders/1sjZnKMbUEt4US1CpJxxDQ5c2oPsi9Njy" },
        { label: "Nat'Co 2K22", link: "https://drive.google.com/drive/folders/1KB2yGqghqCgWIXmxRDubUEUo47h0yExR" },
        { label: "Plan'Co 2K23", link: "https://drive.google.com/drive/folders/17CefiieUPkzD67a95htp7QY2OllgVYam" },
        { label: "Tu'LDs 2k23", link: "https://drive.google.com/drive/folders/1amZUKBIFaPNYNCF-VSjkLX0lniXKDVzo" },
      ],
    },
    {
      name: "Term 21-22 - MC Myrath",
      image: conf2,
      buttons: [
        { label: "Nat'Co 2k21", link: "https://drive.google.com/drive/folders/1te_WrXUGgjuJfoF5Hj776GnkmXbBDuVN" },
        { label: "Tu'LDs 2k22", link: "https://drive.google.com/drive/folders/1mX1SvsTeyONyS57k-WkbF7K2PvRGZ1b0" },
      ],
    },
    {
      name: "Term 20-21 - MC Genisis",
      image: conf3,
      buttons: [
        { label: "SummerCo 2k20", link: "https://drive.google.com/drive/folders/1ChvXzjlfq4xPOQXmuGjYbktweXz5ROlA" },
      ],
    },
  ];

  return (
    <div className="conference-page">
      <NavBar />
      <div className="header">
        <img src={cover_5} alt="Conference Header" className="header-image" />
      </div>

      {/* Conference Section */}
      <div className="conference-section">
        <h2>OUR CONFERENCES</h2>
        <div className="conference-list">
          {conferences.map((conference, index) => (
            <div
              className="conference-card"
              key={index}
              style={{
                backgroundImage: `url(${conference.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3>{conference.name}</h3>
              <div className="conference-buttons">
                {conference.buttons.map((button, idx) => (
                  <button
                    key={idx}
                    className="conference-button"
                    onClick={() => window.open(button.link, "_blank")} // Opens the link in a new tab
                  >
                    {button.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConferencePage;
