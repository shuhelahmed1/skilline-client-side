import React from 'react';
import oneDrive from '../../img/one-drive.png';
import dropBox from '../../img/image 5.png';
import googleDrive from '../../img/image 3.png';
import integ4 from '../../img/image 6.png';
import './Integration.css';
import { Link } from 'react-router-dom';

const Integration = () => {
    return (
        <>
        {/* integration section */}

        <section>
            <div className='d-grid integration-section-container'>
                <div className='integration-icons-container d-grid'>
                    <div className='integration-icons-card'><img className='w-100' src={oneDrive} alt="" /></div>
                    <div className='integration-icons-card mt-5'><img className='w-100' src={dropBox} alt="" /></div>
                    <div className='integration-icons-card'><img className='w-100' src={googleDrive} alt="" /></div>
                    <div className='integration-icons-card mt-5'><img className='w-100' src={integ4} alt="" /></div>
                </div>
                
                <div className=''>
                    <h4>INTEGRATIONS</h4>
                    <div>
                            <h4>200+ educational tools and platform integrations</h4>
                            <p>Shology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.</p>
                            <Link className='integration-link orange-text' to='/integrations'>See All Integrations</Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Integration;