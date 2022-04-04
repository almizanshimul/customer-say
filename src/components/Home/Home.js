import React from 'react';
import './Home.css';
import tesla from "../../images/tesla.png";


const Home = () => {
    return (
        <div className='hero-container'>
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
        </div>
    );
};

export default Home;