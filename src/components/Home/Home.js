import React from 'react';
import './Home.css';
import polygon2 from '../../img/Polygon 2.png';
import  '../../img/Rectangle 5.png';
import google from  '../../img/google-2015 1.png';
import facebook from  '../../img/facebook.png';
import airbnb from  '../../img/airbnb 1.png';
import netflix from  '../../img/netflix.png';
import amazon from  '../../img/amazon.png';
import grab from  '../../img/grab-logo.png';
import bill from '../../img/Group 79.png';
import schedule from '../../img/Group 80.png';
import tracking from '../../img/Group 81.png';
import about1 from '../../img/Group 22.png';
import about2 from '../../img/Group 23.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    return (
        <>
        <section>
        <div className='banner-section d-grid'>
        <div>
            <h1><span className='orange-text'>Studying</span> <span className='blue-text'>Online is now much easier</span></h1>
            <p>Skilline is an interesting platform that will teach you in more an interactive way</p>
            <a className='banner-join-link' target="_blank" rel="noopener noreferrer" href="https://meet.google.com/wjw-nqpf-vof">Join for free</a>
            <img className='banner-watch-icon' src={polygon2} alt="" />
            <a className='banner-watch-link' target="_blank" rel="noopener noreferrer" href="https://meet.google.com/wjw-nqpf-vof">Watch how it works</a>
        </div>
        <div className='banner-right d-grid'>
            <div>
                <div>
                <FontAwesomeIcon icon="fa-solid fa-calendar" />
                </div>
                <div>

                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>     
        </div>
        </section> 

        {/* worldwide trusted companies */}

        <section>
            <h6 className='trusted-companies-heading'>Trusted by 5,000 Companies Worldwide</h6>
            <div className='trusted-companies-section d-grid'>
                <div><img src={google} alt="" /></div>
                <div><img src={netflix} alt="" /></div>
                <div><img src={airbnb} alt="" /></div>
                <div><img src={amazon} alt="" /></div>
                <div><img src={facebook} alt="" /></div>
                <div><img src={grab} alt="" /></div> 
            </div>
        </section>

        {/* all-in-one cloud software section  */}
        <section>
            <div className='text-center cloud-software-top'>
                <h4 className='blue-all-in-one'>All-In-One <span className='orange-cloud-software'>Cloud Software</span></h4>
                <p>Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office</p>
            </div>
            <div className='d-grid cloud-software-facilities'>
                <div className='cloud-software-facility-card'>
                    <img src={bill} alt="" />
                    <h5>Online Billing, Invoicing, &#38; Contracts</h5> 
                    <p>Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts</p>
                </div>
                <div className='cloud-software-facility-card'>
                    <img src={schedule} alt="" />
                    <h5>Easy Scheduling and Attendane Tracking</h5> 
                    <p>Schedule and reserve at one campus or multiple campuses. keep detailed records of student attendane.</p>
                </div>
                <div className='cloud-software-facility-card'>
                    <img src={tracking} alt="" />
                    <h5>Customer Tracking</h5> 
                    <p>Automate and track emails to individuals or groups. Skilline's built-in-system helps organize your organization</p>
                </div>
            </div>
        </section>

        {/* about us section */}
        <section id='aboutus'>
            <div className='about-us-intro'>
                <h4 className='about-us-blue'>What is <span className='about-us-orange'>Skilliine?</span></h4>
                <p>Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
            </div>
            <div className='about-us-card-container d-grid'>
                <div className='about-us-card'>
                    <img src={about1} alt="" />
                    <div className='about-us-instructor'>
                        <h4>FOR INSTRUCTORS</h4>
                        <a className='link-for-instructor' target="_blank" rel="noopener noreferrer" href="https://meet.google.com/wjw-nqpf-vof">Start a class today</a>
                    </div>
                </div>
                <div className='about-us-card'>
                <img src={about2} alt="" />
                <div className='about-us-student'>
                        <h4>FOR STUDENTS</h4>
                        <a className='link-for-student' target="_blank" rel="noopener noreferrer" href="https://meet.google.com/wjw-nqpf-vof">Enter access code</a>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Home;