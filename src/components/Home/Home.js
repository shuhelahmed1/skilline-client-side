import React from 'react';
import './Home.css';
import  '../../img/Rectangle 5.png';



import Banner from '../Banner/Banner';
import TrustedByCompanies from '../TrustedByCompanies/TrustedByCompanies';
import CloudSoftware from '../CloudSoftware/CloudSoftware';
import AboutUs from '../AboutUs/AboutUs';
import MoreAboutUs from '../MoreAboutUs/MoreAboutUs';
import OurFeature from '../OurFeature/OurFeature';
import Tools from '../Tools/Tools';
import SecondFeature from '../SecondFeature/SecondFeature';
import Integration from '../Integration/Integration';


const Home = () => {
    return (
        <>
        <Banner></Banner>
        <TrustedByCompanies></TrustedByCompanies>
        <CloudSoftware></CloudSoftware>
        <AboutUs></AboutUs>
        <MoreAboutUs></MoreAboutUs>
        <OurFeature></OurFeature>
        <Tools></Tools>
        <SecondFeature></SecondFeature>
        <Integration></Integration>
        {/* reviews section */}
        {/* <Reviews></Reviews> */}
        {/* <Review></Review> */}
        </>
    );
};

export default Home;