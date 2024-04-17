import React from 'react'
import './navbar.css'
import Logo from '../../assests/logo-transparent.png'

function NavBar() {
    const buttonStyle = {
        background: 'linear-gradient(to right, #ff6b6b, #556cfb)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
      };
  return (
    <>
        <section className='flex-horizontal navbar'>
            <div className='navbar-logo'>
                <img src={Logo} alt="logo" />
            </div>
            <div className='flex-horizontal navbar-content'>
                <div>MC Tunisia</div>
                <div>Knowledge Hub</div>
                <div>Network Trackers</div>
                <div>Application</div>
                <div>Conference Output</div>
            </div>
            <div className='navbar-button-container'>
                <div className='navbar-button'>
                    <div className='navbar-button-text'>Contact us</div>
                </div>
            </div>
        </section>
    </>
  )
}

export default NavBar