import React from 'react';
import secondFeature from '../../img/Group 106.png';
import { Link } from 'react-router-dom';
import './SecondFeature.css';
const SecondFeature = () => {
    return (
        <>
        {/* second feature section */}
        <section>
            <div className='second-feature-section d-grid'>
                <div>
                    <img className='w-100' src={secondFeature} alt="" />
                </div>
                <div>
                    <h4 className='blue-text second-feature-heading'>One-on-One <span className='orange-text'>Discussions</span></h4>
                    <p className='second-feature-text'>Teachers and teacher assistants can talk with students privately without leaving the zoom environments.</p>
                </div>
            </div>
            <div className='text-center'>
            <Link className='more-feature-btn orange-text' to='/morefeatures'>See more features</Link>
            </div>
        </section>  
        </>
    );
};

export default SecondFeature;