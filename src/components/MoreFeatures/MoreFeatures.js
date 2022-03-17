import React from 'react';
import feature1 from '../../img/Group 106.png';

const MoreFeatures = () => {
    return (
        <div>
            <h2>All features</h2>
            <div className='more-features-container d-grid'>
                <div>
                    <div>
                        <img className='w-100' src={feature1} alt="" />
                    </div>
                    <div>
                        <h4>One-on-One Discussions</h4>
                        <p>Teachers and teacher assistants can talk with students privately without leaving the zoom environments.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img className='w-100' src={feature1} alt="" />
                    </div>
                    <div>
                        <h4>One-on-One Discussions</h4>
                        <p>Teachers and teacher assistants can talk with students privately without leaving the zoom environments.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img className='w-100' src={feature1} alt="" />
                    </div>
                    <div>
                        <h4>One-on-One Discussions</h4>
                        <p>Teachers and teacher assistants can talk with students privately without leaving the zoom environments.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img className='w-100' src={feature1} alt="" />
                    </div>
                    <div>
                        <h4>One-on-One Discussions</h4>
                        <p>Teachers and teacher assistants can talk with students privately without leaving the zoom environments.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreFeatures;