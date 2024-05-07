import React from 'react'
import Footer from '../Footer/Footer'
import './contactus.css'
import upperimage from '../../assests/layerlayer.png'
import folderimage from '../../assests/folderimage.png'

function ContactUs() {
  return (
    <>
      <section className='contactus'>
        <div className='contactus-upper'>
          <div><img className='upperimage' src={upperimage} alt="" /></div>
          <div className='contactus-form-and-title'>
            <div className='contactus-text-type1'>CONTACT US</div>
            
            
          </div>
        </div>
       
      </section>
      <Footer />



    </>
  )
}

export default ContactUs