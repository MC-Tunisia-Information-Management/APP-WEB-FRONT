import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './networktracker.css'
import upperimage from '../../assests/layerlayer.png'
import folderimage from '../../assests/folderimage.png'

function NetworkTracker() {
  return (
    <>
      <NavBar className='navbarr' />
      <section className='networktracker'>
        <div className='knowledgehub-upper'>
          <div><img className='upperimage' src={upperimage} alt="" /></div>
          <div className='knowledgehub-upper-text-image-container'>
            <div className='upper-text-container'>
              <div className='knowledge-text-type1'>NETWORK</div>
           
                <div className='knowledge-text-type1'>TRACKERS</div>
                
            
            </div>
            <div className='upper-image-container'>
              <div className='circle'></div>
              <div>
                <img className='folder-image' src={folderimage} alt="" />
              </div>
            </div>
          </div>
        </div>
       
      </section>
      <Footer />



    </>
  )
}

export default NetworkTracker