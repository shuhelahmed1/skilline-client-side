import React from 'react';
import google from  '../../img/google-2015 1.png';
import facebook from  '../../img/facebook.png';
import airbnb from  '../../img/airbnb 1.png';
import netflix from  '../../img/netflix.png';
import amazon from  '../../img/amazon.png';
import grab from  '../../img/grab-logo.png';
import './TrustedByCompanies.css';
const TrustedByCompanies = () => {
    return (
        <>
          <section>
            <h6 className='trusted-companies-heading'>Trusted by 5,000 Companies Worldwide</h6>
            <div className='trusted-companies-section d-grid'>
                <div><img src={google} alt="" /></div>
                <div><img src={netflix} alt="" /></div>
                <div><img src={airbnb} alt="" /></div>
                <div><img src={amazon} alt="" /></div>
                <div><img src={facebook} alt="" /></div>
                <div><img src={grab} alt="" /></div> 
            </div>
        </section>  
        </>
    );
};

export default TrustedByCompanies;