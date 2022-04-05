import React from 'react';
import './Home.css';
import tesla from "../../images/tesla.png";
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';


const Home = () => {
    const [reviews] = useReviews();
    const cutReview = reviews.slice(0, 3);

    return (
        <div>
            <section className='hero-container'>
                <div className="row">
                    <div className="col">
                        <div>
                            <h1>Tesla Car</h1>
                            <p>What you’re looking at is the reason why a lot of car manufacturers are now scrambling to bring out as many electric vehicles (EVs) as they can before government legislation brings the hammer down on fossil-fuel powered vehicles.</p>
                            <button>Click Here</button>
                        </div>
                    </div>
                    <div className="col">
                        <img src={tesla} alt="" />
                    </div>
                </div>
            </section>
            <section className='reviews-container'>
                <h2>What Our <span>Customer Say!</span></h2>
                <div className="reviews-row">
                    {
                        cutReview.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
                <div className="see-all-reviews">
                <Link to='/reviews'>See all reviews</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;