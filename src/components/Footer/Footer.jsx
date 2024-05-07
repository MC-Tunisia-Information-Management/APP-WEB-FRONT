import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <>
        <section className='footer'>
            <div>
                his site is for internal use only. <br/>
                If you want to learn more about our products <br/>
                and services, refer to our website: <a className='aiesec-org-link' href="https://aiesec.org/" target="_blank"><span className='word-aiesec-link'>aiesec.</span>org.tn</a> 
            </div>
            <div>
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
        </section>
    </>
  )
}

export default Footer