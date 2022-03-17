import React from 'react';
import oneDrive from '../../img/one-drive.png';
import dropBox from '../../img/image 5.png';
import googleDrive from '../../img/image 3.png';
import integ4 from '../../img/image 6.png';
import './Integration.css';

const Integration = () => {
    return (
        <>
        {/* integration section */}

        <section>
            <div className='d-grid integration-section-container'>
                <div className='integration-icons-container d-grid'>
                    <div><img className='w-100' src={oneDrive} alt="" /></div>
                    <div><img className='w-100' src={dropBox} alt="" /></div>
                    <div><img className='w-100' src={googleDrive} alt="" /></div>
                    <div><img className='w-100' src={integ4} alt="" /></div>
                </div>
                <div>
                    <h6>INTEGRATIONS</h6>
                </div>
            </div>
        </section>
        </>
    );
};

export default Integration;