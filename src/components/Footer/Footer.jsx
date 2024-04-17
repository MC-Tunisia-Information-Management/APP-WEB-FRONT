import React from 'react'
import './footer.css'

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
                <div>MC Tunisia</div>
                <div>Knowledge Hub</div>
                <div>Network Trackers</div>
                <div>Application</div>
                <div>Conference Output</div>
            </div>
        </section>
    </>
  )
}

export default Footer