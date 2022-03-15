import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <>
        <footer className='footer-section'>
            <div className='footer-container text-center'>
                <div className='d-flex footer-top justify-content-center'>
                    <div>Skilline</div>
                    <div>Virtual class for</div>
                </div>
                <div className='footer-middle'>
                    <p>Subscribe to get our Newsletter</p>
                    <input type="text" placeholder='Your Email' name="" id="" />
                    <button className='subscribe-button'>Subscribe</button>
                </div>
                <div className='footer-bottom'>
                    <Link to="/careers">Careers</Link>
                    <Link to="/privacypolicy">Privacy Policy</Link>
                    <Link to="/termsandconditions">Terms &amp; conditions</Link>
                    <p>&copy; 2021 Class Technologies Inc.</p>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;