import React from 'react';
import { Link } from 'react-router-dom';
import './Testimonial.css';

const Testimonial = ({review}) => {
    return (
        <>
        <section>
            <div>
                <div className='testimonial-line'></div>
                    <span className='testimonial-heading'>TESTIMONIAL</span>  
                    <h1 className='blue-text'>What they say?</h1> 
                    <p>Skilline has got more than 100k positive ratings from our users around the world.</p>
                    <br />
                    <p>Some of the students and teachers were greatly helped by the Skilline.</p>
                    <br />
                    <p>Are you too? Please give your assessment</p>
                    <Link className='orange-text assessment-link' to='/assessment'>Write your assessment</Link>
            </div> 
            <div>
                <img src="" alt="" />
                <div>
                    <h1>{review}</h1>
                </div>
            </div> 
        </section>
        </>
    );
};

export default Testimonial;