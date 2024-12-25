import React from 'react';
import McvpsPageHeader from '../components/McvpsPageHeader/McvpsPageHeader';
import McvpsExperience from "../components/McvpsExperience/McvpsExperience";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import McvpsExperience from "../components/McvpsExperience/McvpsExperience";

const McvpsPage = () => {
    return (
        <div>
            <NavBar/>
            <McvpsPageHeader/>
            <McvpsExperience/>
            <Footer/>
        </div>
       
    );
};

export default McvpsPage;
