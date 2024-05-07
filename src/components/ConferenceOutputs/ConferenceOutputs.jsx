import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './conferenceoutputs.css'
import upperimage from '../../assests/layerlayer.png'
import conferenceoutputsimage from '../../assests/conferenceoutputsimage.png'

function ConferenceOutputs() {
  return (
    <>
      <NavBar className='navbarr' />
      <section className='conferenceouputs'>
        <div className='conferenceouputs-upper'>
          <div><img className='upperimage' src={upperimage} alt="" /></div>
          <div className='conferenceouputs-upper-text-image-container'>
            <div className='upper-text-container'>
              <div className='conferenceouputs-text-type1'>CONFERENCE</div>
           
                <div className='conferenceouputs-text-type1'>OUTPUTS</div>
                
            
            </div>
            <div className='upper-image-container'>
              <div className='circle'></div>
              <div>
                <img className='folder-image' src={conferenceoutputsimage} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          dropdown
        </div>
        <div className='conference-cards-container'>
          <div className="conference-card">
            <div className='conference-card-upper'>
            </div>
            <div className='conference-card-title'>
            </div>
          </div>
          <div className="conference-card">
            <div className='conference-card-upper'>
            </div>
            <div className='conference-card-title'>
            </div>
          </div>
          <div className="conference-card">
            <div className='conference-card-upper'>
            </div>
            <div className='conference-card-title'>
            </div>
          </div>

        </div>
      </section>
      <Footer />



    </>
  )
}

export default ConferenceOutputs