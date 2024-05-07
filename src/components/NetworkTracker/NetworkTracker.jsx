import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './networktracker.css'
import upperimage from '../../assests/layerlayer.png'
import networktrackerimage from '../../assests/networktrackerimage.png'

function NetworkTracker() {
  return (
    <>
      <NavBar className='navbarr' />
      <section className='networktracker'>
        <div className='networktracker-upper'>
          <div><img className='upperimage' src={upperimage} alt="" /></div>
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
          <div className='networktracker-card'>
            <div className='networktracker-card-upper'>
            </div>
            <div className='networktracker-card-title'>
            </div>
          </div>
          <div className='networktracker-card'>
            <div className='networktracker-card-upper'>
            </div>
            <div className='networktracker-card-title'>
            </div>
          </div>
          <div className='networktracker-card'>
            <div className='networktracker-card-upper'>
            </div>
            <div className='networktracker-card-title'>
            </div>
          </div>
          <div className='networktracker-card'>
            <div className='networktracker-card-upper'>
            </div>
            <div className='networktracker-card-title'>
            </div>
          </div>
          <div className='networktracker-card'>
            <div className='networktracker-card-upper'>
            </div>
            <div className='networktracker-card-title'>
            </div>
          </div>
        </div>
      </section>
      <Footer />



    </>
  )
}

export default NetworkTracker