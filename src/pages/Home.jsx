import React, { useEffect } from "react";
import "./home.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ReactGA from "react-ga4";
import Slider from "react-slick";
import cover_1 from "../../assests/Pictures/cover_1.png";
import cover_2 from "../../assests/Pictures/Entity Pictures .jpg";
import cover_3 from "../../assests/Pictures/1.jpg";
import cover_6 from "../../assests/Pictures/22.jpg";
import cover_5 from "../../assests/Pictures/21.jpg";

function Home() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/",
      title: "Home",
    });
  });

  // Slider settings for the Hero section
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [
    cover_1,
    cover_3,
    cover_6,
    cover_2,
    cover_5
  ];



  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>WELCOME TO AIESEC IN TUNISIA <br/>OFFICAL HUB</h1>
        </div>
        <Slider {...settings} className="hero-slider">
          {images.map((image, index) => (
            <div key={index} className="hero-image-container">
              <img src={image} alt={`Hero Slide ${index + 1}`} className="hero-image" />
            </div>
          ))}
        </Slider>
      </div>

      

      {/* Search Section */}
      <div className="search">
        <div></div>
        <div></div>
        <div className="wave-container">
            <svg
              className="wave"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#f4f4f4" // Adjust this color as needed
                fillOpacity="1"
                d="M0,224L30,213.3C60,203,120,181,180,154.7C240,128,300,96,360,96C420,96,480,128,540,154.7C600,181,660,203,720,213.3C780,224,840,224,900,218.7C960,213,1020,203,1080,181.3C1140,160,1200,128,1260,112C1320,96,1380,96,1410,96L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
              ></path>
          </svg>
          </div>
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
      
      <Footer />
    </>
  );
}

export default Home;
