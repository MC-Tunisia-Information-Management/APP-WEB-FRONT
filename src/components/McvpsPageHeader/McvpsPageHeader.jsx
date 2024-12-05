import React from 'react';
import './McvpsPageHeader.css';

const McvpsPageHeader = ({name, currentPosition, picture }) => {
    return (
        <div className="mcvps-header">
            {/* Left part: Name and Position */}
            <div className="header-left">
                <div className="mcvp-name-container">
                    <h1 className="mcvp-name">{name}</h1>
                    <p className="mcvp-position">{currentPosition}</p>

                </div>
            </div>

            {/* Right part: Image */}
            <div className="header-right">
                <img
                    src={(`../../assests/MC HUSTLE/${picture}`).default}  // Make sure path is correct
                    alt="MCVP"
                    className="mcvp-image"
                />
            </div>
        </div>
    );
};

export default McvpsPageHeader;
