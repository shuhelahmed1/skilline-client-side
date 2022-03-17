import React from 'react';
import { Link } from 'react-router-dom';
import pupils from '../../img/confident-teacher-explaining-lesson-pupils 1.png';
import './MoreAboutUs.css';

const MoreAboutUs = () => {
    return (
        <>
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
        </>
    );
};

export default MoreAboutUs;