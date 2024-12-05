import React from "react";
import "../../css/ConferencesOutputsPage.css";

const ConferencesOutputs = ({ name, image, driveLink }) => {
  return (
    <div className="conference-section">
      <div className="conference-content">
        <h1 className="conference-title">{name}</h1>
        <img
          src={require(`../../assests/Pictures/${image}`)}
          alt={name}
          className="conference-image"
        />
        <br />
        <a href={driveLink} target="_blank" rel="noopener noreferrer">
          <button className="output-button">Output</button>
        </a>
      </div>
    </div>
  );
};

export default ConferencesOutputs;
