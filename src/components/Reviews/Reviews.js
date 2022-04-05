import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <section className='reviews-container'>
                <h2>What Our <span>Customer Say!</span></h2>
                <div className="reviews-row">
                        {
                            reviews.map(review => <Review 
                                key={review.id} 
                                review={review}
                                ></Review>)
                        }
                </div>
            </section>
        </div>
    );
};

export default Reviews;