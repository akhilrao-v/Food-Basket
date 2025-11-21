import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

function Footer() {
  return (
    <>
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className="logo-footer" src={assets.logo} alt=''/>
                <p>on time every time </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>Deliver</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get  In Touch</h2>
                <ul>
                    <li>+919999999999</li>
                    <li>contact@foodbasket.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright © 2025 Foodbasket. All rights reserved.</p>
    </div>
    </>
    
  )
}

export default Footer