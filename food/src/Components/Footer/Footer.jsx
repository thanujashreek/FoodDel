import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footercontent">
            <div className="footer-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet.</p>
                <div className="socialicons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footer-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
            <div className="footer-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>Phone number</li>
                    <li>Email-Id</li>
                </ul>


            </div>
        </div>
        <hr />
       <p className="footercopy">@tomato.com-All Rights Reserved.</p>

      
    </div>
  )
}

export default Footer
