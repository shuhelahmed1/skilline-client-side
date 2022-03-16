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
import pupils from '../../img/confident-teacher-explaining-lesson-pupils 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <section>
        <div className='banner-section d-grid'>
        <div>
            <h1><span className='banner-heading-start'>Studying</span> <span className='banner-heading-end'>Online is now much easier</span></h1>
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

        {/* more about us section */}
        <section>
            <div className='more-about-us d-grid'>
                <div>
                    <h4>Everything you can do in a physical classroom, you can do with Skilline</h4>
                    <p>Skilline's school management software helps traditional and online schools manage scheduling, addendence, payments and virtual classroom all in one secure cloud based system.</p>
                    <Link to=''>Learn more</Link>
                </div>
                <div>
                    <img className='w-100' src={pupils} alt="" />
                </div>
            </div>
        </section>

        {/* our feature section */}
        <section>
            <h4 className='text-center'>Our Feature</h4>
            <p className='text-center'>this very extraordinary feature, can make learning activities more efficient.</p>
            <div className='d-grid our-feature-content'>
                <div className='d-grid our-feature-img'>
                    <div><img className='w-100' src="https://media.istockphoto.com/photos/portrait-young-confident-smart-asian-businessman-look-at-camera-and-picture-id1288538088?b=1&k=20&m=1288538088&s=170667a&w=0&h=3efMku7kSXUhpVrErAVVgxp6G91tRZ_5seygOn68RnE=" alt="" />
                    <button className='our-feature-btn1'>Present</button>
                    <button className='our-feature-btn2'>Call</button>
                    </div>
                    <div>
                        <div className='mb-3'><img className='w-100' src="https://cdn.pixabay.com/photo/2017/11/02/14/26/model-2911329__340.jpg" alt="" /></div>
                        <div><img className='w-100' src="https://cdn.pixabay.com/photo/2019/07/13/11/45/black-professional-4334648__340.jpg" alt="" /></div>
                    </div>
                    <div>
                        <div className='mb-3'><img className='w-100' src="https://cdn.pixabay.com/photo/2018/07/25/08/58/business-3560916__340.jpg" alt="" /></div>
                        <div><img className='w-100' src="https://cdn.pixabay.com/photo/2017/09/21/19/06/woman-2773007__340.jpg" alt="" /></div>
                    </div>
                </div>
                <div>
                    <h4>A user interface designed for the classroom</h4>
                    <div>
                        <img src="" alt="" />
                        <p>Teachers don't get lost in the grid view and have a dedicated Prodium spare</p>
                    </div>
                    <div>
                        <p>TA's and presenters can be move to the front of the class.</p>
                    </div>
                    <div>
                        <p>Teachers can see easily all students and class data at one time</p>
                    </div>
                </div>
            </div>
        </section>

        {/* testimonial section */}
        <section>
                <div className='testimonial-line'></div>
                <span className='testimonial-heading'>TESTIMONIAL</span>  
                <h1 className='blue-text'>What they say?</h1> 
                <p>Skilline has got more than 100k positive ratings from our users around the world.</p>
                <br />
                <p>Some of the students and teachers were greatly helped by the Skilline.</p>
                <br />
                <p>Are you too? Please give your assessment</p>
                <Link className='orange-text assessment-link' to='/assessment'>Write your assessment</Link>
        </section>
        </>
    );
};

export default Home;