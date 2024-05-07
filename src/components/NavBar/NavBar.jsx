import React from 'react'
import './navbar.css'
import Logo from '../../assests/logo-transparent.png'
import { Link } from 'react-router-dom'

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
            <Link to="/home">
                <div className='navbar-logo'>
                    
                        <img src={Logo} alt="logo" />
                    
                    
                </div>
            </Link>
            <div className='flex-horizontal navbar-content'>
                
                <Link to="/mc-tunisia" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <div>MC Tunisia</div>
                </Link>
                <Link to="/knowledge-hub" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <div>Knowledge Hub</div>
                </Link>
                <Link to="/network-trackers" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <div>Network Trackers</div>
                </Link>
                <Link to="/application" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <div>Application</div>
                </Link>
                <Link to="/conference-outputs" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <div>Conference Outputs</div>
                </Link>

                
                
                
                
            </div>
            <div className='navbar-button-container'>
                <Link to="/contact-us" style={{ color: 'inherit', textDecoration: 'none' }}>
                <div className='navbar-button'>
                    <div className='navbar-button-text'>Contact us</div>
                </div>
                </Link>
            </div>
        </section>
    </>
  )
}

export default NavBar