import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, img, reviews, rate, published } = props.review

    return (
        <div className='review-col'>
            <div className='card'>
                <img className='profile-img' src={img} alt="" />
                <div className='user-details'>
                    <h3>{name}</h3>
                    <div>
                    <p><strong>Published: </strong>{published}</p>
                    <p>Rate: {rate}</p>
                    </div>
                    <p>{reviews}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;