import React, { useEffect } from "react";
import "../css/home.css";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import ReactGA from "react-ga4";
import Slider from "react-slick";
import cover_1 from "../assests/Pictures/cover_1.png";
import cover_2 from "../assests/Pictures/Entity Pictures .jpg";
import cover_3 from "../assests/Pictures/1.jpg";
import cover_6 from "../assests/Pictures/22.jpg";
import cover_5 from "../assests/Pictures/21.jpg";

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
          <h1>WELCOME TO AIESEC IN TUNISIA <br />OFFICAL HUB</h1>
        </div>
        <Slider {...settings} className="hero-slider">
          {images.map((image, index) => (
            <div key={index} className="hero-image-container">
              <img src={image} alt={`Hero Slide ${index + 1}`} className="hero-image" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="wave-container">
          <div className="search-container">
            <div>
              <div className="konnect1">CAN'T FIND SOMETHING?</div>
              <div className="konnect2">TRY SEARCHING FOR IT BELOW!</div>
            </div>
            <div className="search-input-container">
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
