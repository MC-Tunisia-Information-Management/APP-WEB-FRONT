import React from 'react';
import './McvpsExperience.css';

const McvpsJourney = ({ journey }) => {
    return (
        <div className="mcvps-journey">
            <div className="roadmap-container">
                <div className="vertical-line"></div>
                {journey.map((step, index) => (
                    <div key={index} className={`roadmap-step ${step.side}`}>
                        <div className="line-point"></div>
                        <div className="step-content">
                            <p className="step-position">{step.position}</p>
                            <p className="step-description">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default McvpsJourney;
