import React from 'react';
import './AllIntegrations.css';
import oneDrive from '../../img/one-drive.png';
import dropBox from '../../img/image 5.png';
import drive from '../../img/image 3.png';
import integ4 from '../../img/image 6.png';


const AllIntegrations = () => {
    return (
        <>
        <section>
            <h4 className='integrations-heading text-center orange-text'>All <span className='blue-text'>Integrations</span></h4>
            <div className='all-integrations-container d-grid'>
                <div className='all-integrations-card'>
                    <div>
                        <img src={oneDrive} alt="" />
                    </div>
                        <p>Microsoft OneDrive is a file hosting service that Microsoft operates. First launched in August 2007</p>
                </div>
                <div className='all-integrations-card'>
                    <div>
                        <img src={dropBox} alt="" />
                    </div>
                        <p>Dropbox is a file hosting service operated by the American company Dropbox, Inc.</p>
                </div>
                <div className='all-integrations-card'>
                    <div>
                        <img src={drive} alt="" />
                    </div>
                        <p>Google Drive is a file storage and synchronization service developed by Google.</p>
                </div>
                <div className='all-integrations-card'>
                    <div>
                        <img src={integ4} alt="" />
                    </div>
                        <p>Dropbox is a file hosting service operated by the American company Dropbox, Inc.</p>
                </div>
            </div>
        </section>  
        </>
    );
};

export default AllIntegrations;