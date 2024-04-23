import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import './knowledgehub.css'
import upperimage from '../../assests/layerlayer.png'
import folderimage from '../../assests/folderimage.png'

function KnowledgeHub() {
  return (
    <>
      
      <section className='knowledgehub'>
        <div className='knowledgehub-upper'>
          <div><img className='upperimage' src={upperimage} alt="" /></div>
          <div className='knowledgehub-upper-text-image-container'>
            <div className='upper-text-container'>
              <div className='knowledge-text-type1'>KNOWLEDGE</div>
              <div className='flex-horizontal hubhub'>
                <div className='knowledge-text-type1'>HUB</div>
                <div className='knowledge-text-type2-container'>
                  <div className='knowledge-text-type2'>EVERYTHING YOU</div>
                  <div className='knowledge-text-type2'>NEED IN ONE PLACE.</div>
                  
                </div>
              </div>
            </div>
            <div className='upper-image-container'>
              <div className='circle'></div>
              <div>
                <img className='folder-image' src={folderimage} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="middle-container">
          <div className='middle-part-title'>THE BACK OFFICE</div>
          <div className='middle-part-content-container'>
            <div className='card'>MARKETING</div>
            <div className='card'>BUSINESS DEVELOPMENT</div>
            <div className='card'>FINANCE & LEGALITIES</div>
            <div className='card'>TALENT MANAGMENT</div>
            <div className='card'>ENTITY CONTROL BOARD</div>
            <div className='card'>ORGANIZATIONAL DEVELOPMENT</div>
          </div>
        </div>
        <div className="middle-container">
          <div className='middle-part-title'>THE FRONT OFFICE</div>
          <div className='middle-part-content-container'>
            <div className='card'>OUTGOING GLOBAL TALENT</div>
            <div className='card'>OUTGOING GLOBAL TEACHER</div>
            <div className='card'>OUTGOING GLOBAL VOLUNTEER</div>
            <div className='card'>INCOMING GLOBAL TALENT</div>
            <div className='card'>INCOMING GLOBAL TEACHER</div>
            <div className='card'>INCOMING GLOBAL VOLUNTEER</div>
          </div>
        </div>
      </section>
      <Footer />



    </>
  )
}

export default KnowledgeHub