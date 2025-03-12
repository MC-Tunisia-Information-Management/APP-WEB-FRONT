import React, { useEffect, useState } from "react";
import './McvpsPageHeader.css';

const McvpsPageHeader = ({ name, currentPosition, picture }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    // Load the image dynamically
    const loadImage = async () => {
      try {
        const img = require(`../../assests/MC HUSTLE/${picture}`);
        setImage(img);
      } catch (error) {
        console.error(`Error loading image: ${picture}`, error);
        setImage(""); // Fallback to an empty image or placeholder if needed
      }
    };

    loadImage();
  }, [picture]);

  return (
    <div className="mcvps-header">
      {/* Left Part: Name and Position */}
      <div className="header-left">
        <div className="mcvp-name-container">
          <h1 className="mcvp-name">{name}</h1>
          <p className="mcvp-position">{currentPosition}</p>
        </div>
      </div>

      {/* Right Part: Image */}
      <div className="header-right">
        {image ? (
          <img
            src={image}
            alt={`${name}'s Picture`}
            className="mcvp-image"
          />
        ) : (
          <div className="image-placeholder">Image Not Available</div>
        )}
      </div>
    </div>
  );
};

export default McvpsPageHeader;
