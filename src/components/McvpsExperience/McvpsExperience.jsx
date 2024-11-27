import React from 'react';
import './McvpsExperience.css';

const McvpsExperience = () => {
    const roadmapSteps = [
        { position: "Member", description: "LC RUSPINA.", side: "left" },
        { position: "Team Leader", description: "IGV Department", side: "right" },
        { position: "Vice President", description: "IGV Department", side: "left" },
        { position: "MCVP", description: "Information Management", side: "right" },
    ];

    return (
        <div className="mcvps-experience">
            <h1 className="experience-title">AIESEC Journey</h1>
            <div className="roadmap-container">
                <div className="vertical-line"></div>
                {roadmapSteps.map((step, index) => (
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

export default McvpsExperience;
