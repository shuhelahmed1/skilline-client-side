import React from 'react';
import polygon2 from '../../img/Polygon 2.png';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <section>
        <div className='banner-section d-grid'>
        <div>
            <h1><span className='banner-heading-start'>Studying</span> <span className='banner-heading-end'>Online is now much easier</span></h1>
            <p>Skilline is an interesting platform that will teach you in more an interactive way</p>
            <a className='banner-join-link' target="_blank" rel="noopener noreferrer" href="https://meet.google.com/wjw-nqpf-vof">Join for free</a>
            <img className='banner-watch-icon' src={polygon2} alt="" />
            <a className='banner-watch-link' target="_blank" rel="noopener noreferrer" href="https://meet.google.com/wjw-nqpf-vof">Watch how it works</a>
        </div>
        <div className='banner-right d-grid'>
            <div>
                <div>
                </div>
                <div>

                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>     
        </div>
        </section> 
        </>
    );
};

export default Banner;