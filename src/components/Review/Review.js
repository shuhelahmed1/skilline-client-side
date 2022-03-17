import React, { useState } from 'react';
import Reviews from '../Reviews/Reviews';

const Review = () => {
    const [review, setReview] = useState([])
    fetch('https://fast-sands-35735.herokuapp.com/assessments')
    .then(res=> res.json())
    .then(data=> setReview(data))
    return (
        <div>
            {
                review.map(reviews=> <Reviews key={reviews._id} reviews={reviews}></Reviews>)
            }
        </div>
    );
};

export default Review;