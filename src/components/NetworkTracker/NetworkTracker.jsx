import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './networktracker.css';
import upperimage from '../../assests/layerlayer.png';
import networktrackerimage from '../../assests/networktrackerimage.png';

function NetworkTracker() {
  return (
    <>
      <NavBar className='navbarr' />
      <section className='networktracker'>
        <div className='networktracker-upper'>
          <div>
            <img className='upperimage' src={upperimage} alt="" />
          </div>
          <div className='networktracker-upper-text-image-container'>
            <div className='upper-text-container'>
              <div className='networktracker-text-type1'>NETWORK</div>
              <div className='networktracker-text-type1'>TRACKERS</div>
            </div>
            <div className='upper-image-container'>
              <div className='circle'></div>
              <div>
                <img className='folder-image' src={networktrackerimage} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='networktracker-content-container'>
          <a href='https://docs.google.com/spreadsheets/d/1flgEi9EyQl6cHoZk87KrKcmg6owssrolGR2HLMHzbIo/edit#gid=74829231' target='_blank' className='networktracker-card'>
            <div className='networktracker-card-upper card-upper-1'>
            Network Tracker S1
            </div>
            <div className='networktracker-card-title card-title-1'>
            First semester of 23-24 - MC OWN
            </div>
          </a>
          <a href='https://docs.google.com/spreadsheets/d/13_DoZK7DHOPGQvLwDcultqorlOuQO8lF1AQ_ywwKZpc/edit#gid=1234857507' target='_blank' className='networktracker-card'>
            <div className='networktracker-card-upper card-upper-2'>
            Network Tracker S2
            </div>
            <div className='networktracker-card-title card-title-2'>
            2nd semester of 23-24 - MC OWN
            </div>
          </a>
          <a href='https://docs.google.com/spreadsheets/d/1vmkGkrrkEovxjpVpR9z16c4xTOX6nAqHgn2aDC7WuN0/edit#gid=462857284' target='_blank' className='networktracker-card'>
            <div className='networktracker-card-upper card-upper-3'>
            IR Insight Tool            </div>
            <div className='networktracker-card-title card-title-3'>
              Get insights about our IR
            </div>
          </a>
          <a href='https://docs.google.com/spreadsheets/d/182xauomWs5YFsSFiSmvQY9iSWMx7PSnvCIBKhiCk0hI/edit#gid=699511709' target='_blank' className='networktracker-card'>
            <div className='networktracker-card-upper card-upper-4'>
              Hackathon tracker
            </div>
            <div className='networktracker-card-title card-title-4'>
              Results & output
            </div>
          </a>
          <a href='https://docs.google.com/presentation/d/1pjM__MOhb3SdHGBlYPUAw06GoXdM8M-AqGMiiV-0GEk/edit#slide=id.g2773f8dd6e6_1_96' target='_blank' className='networktracker-card'>
            <div className='networktracker-card-upper card-upper-5'>
              AiT Roadmap
            </div>
            <div className='networktracker-card-title card-title-5'>
              3 terms roadmap output
            </div>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default NetworkTracker;
