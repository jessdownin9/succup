import React from 'react';
import './Home.css';

export const Home = () => {
    return (
        <div className="home">
            <section className='screen1'>
                <img className='purple-cup' alt='Purple Suc Cup' src={require('../images/purplecup.png')} />
                <img className='green-cup' alt='Green Suc Cup' src={require('../images/greencup.png')} />
                <img className='main-logo' alt='Suc Cup logo' src={require('../images/logosemitransparentbackground.png')} />
            </section>
        </div>
    )
};

export default Home;
