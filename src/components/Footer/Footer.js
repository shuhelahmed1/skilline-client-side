import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const emailRef = useRef();
    const handleSubscriber = e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const newSubscriber = {email}
        fetch('https://fast-sands-35735.herokuapp.com/subscribers', {
            method: 'POST',
            headers:{
                'content-type': 'application/json' 
            },
            body: JSON.stringify(newSubscriber)
        })
        .then(res=>res.json())
        .then(data => {
            alert('You are successfully subscribed')
            
        })
        e.target.reset();
    }
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
                    <form onSubmit={handleSubscriber}>
                    <input type="email" ref={emailRef} placeholder='Your Email' name="" id="" />
                    <button type='submit' className='subscribe-button'>Subscribe</button>
                    </form>
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