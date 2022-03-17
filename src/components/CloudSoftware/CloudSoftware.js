import React from 'react';
import bill from '../../img/Group 79.png';
import schedule from '../../img/Group 80.png';
import tracking from '../../img/Group 81.png';
import './CloudSoftware.css';

const CloudSoftware = () => {
    return (
        <>
           {/* all-in-one cloud software section  */}
        <section>
            <div className='text-center cloud-software-top'>
                <h4 className='blue-all-in-one'>All-In-One <span className='orange-cloud-software'>Cloud Software</span></h4>
                <p>Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office</p>
            </div>
            <div className='d-grid cloud-software-facilities'>
                <div className='cloud-software-facility-card'>
                    <img src={bill} alt="" />
                    <h5>Online Billing, Invoicing, &#38; Contracts</h5> 
                    <p>Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts</p>
                </div>
                <div className='cloud-software-facility-card'>
                    <img src={schedule} alt="" />
                    <h5>Easy Scheduling and Attendane Tracking</h5> 
                    <p>Schedule and reserve at one campus or multiple campuses. keep detailed records of student attendane.</p>
                </div>
                <div className='cloud-software-facility-card'>
                    <img src={tracking} alt="" />
                    <h5>Customer Tracking</h5> 
                    <p>Automate and track emails to individuals or groups. Skilline's built-in-system helps organize your organization</p>
                </div>
            </div>
        </section> 
        </>
    );
};

export default CloudSoftware;