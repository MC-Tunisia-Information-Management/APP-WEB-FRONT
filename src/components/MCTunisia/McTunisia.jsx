import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './mctunisia.css'
import upperimage from '../../assests/layerlayer.png'
import folderimage from '../../assests/folderimage.png'

function McTunisia() {
  return (
    <>
      <NavBar className='navbarr' />
      <section className='mctunsia'>
        <div className='mctunsia-upper'>
          <div><img className='upperimage' src={upperimage} alt="" /></div>
          <div className='mctunsia-upper-text-image-container'>
            <div className='upper-text-container'>
              <div className='mctunsia-text-type1'>MC Tunisia</div>
           
                
            
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

export default McTunisia