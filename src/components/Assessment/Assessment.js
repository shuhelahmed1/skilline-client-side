import React, { useRef } from 'react';
import './Assessment.css';

const Assessment = () => {
    const nameRef = useRef();
    const imgRef = useRef();
    const commentRef = useRef();
    const ratingRef = useRef();
    const handleAssessment = e =>{
        e.preventDefault();
    const name = nameRef.current.value;
    const img = imgRef.current.value;
    const comment = commentRef.current.value;
    const rating = ratingRef.current.value; 
    const newReview = {name, img, comment, rating}
    fetch('https://fast-sands-35735.herokuapp.com/assessments',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newReview)
    })
    .then(res=>res.json())
    .then(data=> {
        alert('Assessment successfully added')
    })
    }
    return (
        <div>
            <form className='assessment-form' onSubmit={handleAssessment}>
                <h2 className='text-center'>Please provide your review</h2>
                <p><input ref={nameRef} placeholder='Your Image Url' type="text" /></p>
                <p><input ref={imgRef} placeholder='Name'  type="text" /></p>
                <p><input ref={commentRef} placeholder='Comment' type="text" /></p>
                <p><input ref={ratingRef} placeholder='Rating' type="text" /></p>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Assessment;