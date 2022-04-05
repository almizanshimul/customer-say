import React from 'react';
import './Home.css';
import tesla from "../../images/tesla.png";


const Home = () => {
    return (
        <div>
            <section className='hero-container'>
                <div className="row">
                    <div className="col">
                        <div>
                            <h1>Tesla Model 3</h1>
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
                <h2>What Our Customer Say!</h2>
                <div className="reviews-row">
                    <div className="reviews-col">
                        <div className='card'>
                            <img src="" alt="" />
                            <div className='details'>
                                <h3>customer name</h3>
                                <p><strong>Published: </strong></p>
                                <p>comment</p>
                            </div>
                        </div>
                    </div>
                    <div className="reviews-col"></div>
                    <div className="reviews-col"></div>
                </div>
            </section>
        </div>
    );
};

export default Home;