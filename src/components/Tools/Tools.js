import React from 'react';
import tools from '../../img/Group 122.png';
import './Tools.css';

const Tools = () => {
    return (
        <>
            {/* tools section */}
        <section>
            <div className='tools-section-top d-grid'>
                <div>
                    <h4 className='tools-top-heading blue-text'><span className='orange-text'>Tools</span> For Teachers and Learners</h4>
                    <p className='tools-top-text'>Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students for complete and submit.</p>
                </div>
                <div>
                    <img className='w-100' src={tools} alt="" />
                </div>
            </div>
        </section> 
        </>
    );
};

export default Tools;