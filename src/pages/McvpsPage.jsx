import React from 'react';
import { useParams } from 'react-router-dom';
import McvpsPageHeader from '../components/McvpsPageHeader/McvpsPageHeader';
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import McvpsExperience from "../components/McvpsExperience/McvpsExperience";
import mcvpsData from "../data/McvpsPages.json";

const McvpsPage = () => {
  const { index } = useParams(); // Access the dynamic index from the URL
  const mcvp = mcvpsData[parseInt(index)]; // Parse index as an integer to get the correct MCVP

  if (!mcvp) {
    return <div>MCVP not found</div>; // If no MCVP exists for the given index
  }

  return (
    <div>
      <NavBar />
      <div className="mcvps-page">
        <McvpsPageHeader
          name={mcvp.name}
          currentPosition={mcvp.currentPosition}
          picture={mcvp.picture}  
        />
        <McvpsExperience journey={mcvp.journey} />
      </div>
      <Footer />
    </div>
  );
};

export default McvpsPage;