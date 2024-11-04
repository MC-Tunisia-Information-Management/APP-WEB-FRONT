import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Icons for social media
import Logo from 'C:/Users/LENOVO/Desktop/APP-WEB-FRONT/src/assests/AIESECC.png'; 

function Footer() {
  return (
    <section className='footer'>
        <div className="logo-container">
          <img src={Logo} alt="AIESEC Logo" className="footer-logo" />
        </div>
      <div className='footer-text'>
        This site is for internal use only. <br />
        If you want to learn more about our products <br />
        and services, refer to our website: <a className='aiesec-org-link' href='https://aiesec.org.tn' target='_blank' rel='noopener noreferrer'>
          aiesec.org.tn
        </a>
      </div>
      <div className='footer-links'>
        <Link to='/mc-tunisia'>MC Tunisia</Link>
        <Link to='/knowledge-hub'>Knowledge Hub</Link>
        <Link to='/network-trackers'>Network Trackers</Link>
        <Link to='/conference-outputs'>Conference Outputs</Link>
      </div>
      <div className='footer-social'>
      <span className='follow-us'>Follow us</span>
      <a href="https://www.facebook.com/AIESEC.Tunisia" target="_blank" rel="noopener noreferrer">
      <FaFacebook className='social-icon' />
      </a>
      <a href="https://www.instagram.com/aiesecintunisia/" target="_blank" rel="noopener noreferrer">
      <FaInstagram className='social-icon' />
    </a>
    <a href="https://www.linkedin.com/company/aiesec-tunisia/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='social-icon' />
          </a>
      </div>
      <div className="mc-text">
          MC 24.25
        </div>
    </section>
  );
}

export default Footer;
