import React from 'react'
import './Footer.scss'

function Footer(){
    return(
        <footer className="footer">
            <p className="footer__heading">Questions? Call <span>000-800-040-1843</span></p>
            <div className="footer__lists">
                <div className="footer__list">
                    <p>FAQ</p>
                    <p>Investor Relations</p>
                    <p>Privacy</p>
                    <p>Speed Test</p>
                </div>
                <div className="footer__list">
                    <p>Help Centre</p>
                    <p>Jobs</p>
                    <p>Cookie Preferences</p>
                    <p>Legal Notices</p>
                </div>
                <div className="footer__list">
                    <p>Account</p>
                    <p>Ways to Watch</p>
                    <p>Corporate Information</p>
                    <p>Netflix Originals</p>
                </div>
                <div className="footer__list">
                    <p>Media Centre</p>
                    <p>Terms of Use</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className="footer__lang">
                <select>
                    <option>English</option>
                    <option>Hindi</option>
                </select>
            </div>
            <p className="footer__origin">Netflix India</p>
        </footer>
    )
}

export default Footer