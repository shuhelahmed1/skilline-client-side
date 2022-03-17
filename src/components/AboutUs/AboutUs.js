import React from 'react';
import about1 from '../../img/Group 22.png';
import about2 from '../../img/Group 23.png';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <>
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

export default AboutUs;