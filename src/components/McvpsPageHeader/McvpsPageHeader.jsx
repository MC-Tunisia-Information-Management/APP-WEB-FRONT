import React from 'react';
import './McvpsPageHeader.css';
import cover_5 from "../../assests/Pictures/21.jpg";

const McvpsPageHeader = () => {
    return (
        <div className="mcvps-header">
            {/* Left part: Name and Position */}
            <div className="header-left">
            <div  className="mcvp-name-container">
                <h1 className="mcvp-name">Yosr Akrout</h1>
                <p className="mcvp-position">MCVP of Information Management</p>
            </div>
            </div>

            {/* Right part: Image */}
            <div className="header-right">
                <img
                    src={cover_5}
                    alt="MCVP"
                    className="mcvp-image"
                />
            </div>
        </div>
    );
};

export default McvpsPageHeader;
