import React from 'react';
import { Link } from 'react-router-dom';
import './Reviews.css';

const Reviews = ({reviews}) => {

    return (
        <>
           <div>
                <div className='reviews-line'></div>
                    <span className='reviews-heading'>TESTIMONIAL</span>  
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
                 <h1>{reviews.name}</h1>
                </div>
            </div>  
        </>
    );
};

export default Reviews;