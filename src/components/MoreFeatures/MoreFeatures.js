import React from 'react';
import feature1 from '../../img/Group 106.png';
import './MoreFeatures.css';

const MoreFeatures = () => {
    return (
        <div>
            <h2 className='all-features-heading orange-text text-center my-3'>All <span className='blue-text'>features</span></h2>
            <div className='more-features-container d-grid'>
                <div className='more-features-card'>
                    <div>
                        <img className='w-100' src={feature1} alt="" />
                    </div>
                    <div>
                        <h4>One-on-One Discussions</h4>
                        <p>Teachers and teacher assistants can talk with students privately without leaving the zoom environments.</p>
                    </div>
                </div>
                <div className='more-features-card'>
                    <div>
                        <img className='w-100' src='https://cdn.pixabay.com/photo/2018/05/03/11/38/skills-3371153__340.jpg' alt="" />
                    </div>
                    <div>
                        <h4>Skills and Certifications Management</h4>
                        <p>This feature is solely for the students. While learning online, students acquire several skills and certifications. </p>
                    </div>
                </div>
                <div className='more-features-card'>
                    <div>
                        <img className='w-100' src='https://cdn.pixabay.com/photo/2019/01/16/20/52/chatbot-3936760__340.jpg' alt="" />
                    </div>
                    <div>
                        <h4>Instant Messaging</h4>
                        <p>Students at your online learning portal can benefit from instant messages by interacting with the tutors in real-time.</p>
                    </div>
                </div>
                <div className='more-features-card'>
                    <div>
                        <img className='w-100' src='https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333__340.jpg' alt="" />
                    </div>
                    <div>
                        <h4>Personal Notes and Sharing</h4>
                        <p>Taking notes during classes is the most common and effective way for students to memorize things. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreFeatures;