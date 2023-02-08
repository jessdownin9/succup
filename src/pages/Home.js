import React, { useEffect, useRef } from 'react';
import './Home1.css';
import './Home2.css';
import './Home3.css';
import './Home4.css';
import "@fontsource/pavanam";
import { buttonFontAnimation } from '../animations/buttonFontAnimation';
// import { scrollBack, scrollToNext } from '../animations/scrollingAnimation';

export const Home = () => {
    const buttonRef = useRef(null);
    
    useEffect(() => {
        // document.addEventListener('wheel', (e) => {
        //     if (e.deltaY > 0) {
        //         scrollToNext();
        //     } else if (e.deltaY < 0) {
        //         scrollBack();
        //     }
        // })

        buttonFontAnimation(buttonRef.current, ['Londrina Solid', 'Londrina Shadow']);
    }, []);

    return (
        <div className="home">
            <section className='screen1'>
                <img className='banner-logo' alt='Suc Cup logo' src={require('../images/logosemitransparentbackground.png')} />
                <img className='green-cup' alt='Green Suc Cup' src={require('../images/greencup.png')} />
            </section>

            <section className='screen2'>
                <div className = 'hidden'></div>
                <div className='paragraph-container'>
                    <p>The Suc Cup is your modern all-in-one phone accessory. Utilizing durable yet flexible silicone, the Suc Cup allows you to mount your phone to any non-porous surface for your watching, filming, picture taking, or any other phone use desire. The Suc Cup can be stuck to your phone and then to the other surface you wish to mount it to with a simple push. And with tabs on each cup, you can remove the Suc Cup with ease. The included key ring allows you to store the Suc Cup on your key chain as a functional and stylish key chain ornament.</p>
                    <button className='interested-button' onClick={() => window.open('https://byu.az1.qualtrics.com/jfe/form/SV_cvE3ECvmqd1PFxY','_blank')} ref={buttonRef}>I'M INTERESTED!</button>
                </div>
                <div className='headline-container'>
                    <img className='purple-cup' alt='Purple Suc Cup' src={require('../images/purplecup.png')} />
                    <h1>THE ONLY PHONE ACCESSORY YOU NEED</h1>
                </div>
            </section>

            <section className='screen3'>
                <h1>HOW WE SUC</h1>
                <div className='carousel' >
                    <input type="radio" name="position" />
                    <input type="radio" name="position" />
                    <input type="radio" name="position" />
                    <input type="radio" name="position" />
                    <input type="radio" name="position" />
                    <div className='carousel-images'>
                        <img className='item bathroom' alt='Phone mounted on bathroom mirror' src={require('../images/phoneinbathroom.png')} />
                        <img className='item kitchen' alt='Phone mounted above kitchen stove' src={require('../images/phoneinkitchen.jpg')} />
                        <img className='item car' alt='Phone mounted on interior of car' src={require('../images/phoneincar.jpg')} />
                        <img className='item shower' alt='Phone mounted on shower wall' src={require('../images/phoneinshower.png')} />
                        <img className='item desk' alt='Phone propped up on desk' src={require('../images/phoneondesk.png')} />
                    </div>
                </div>
            </section>

            <section className='screen4'>
                <div className='keychain-headline-container'>
                    <h1>EASY STORAGE ON YOUR KEYCHAIN</h1>
                </div>
                <div className='footer-container'>
                    <div className='left'>
                        <h2>© 2022 Suc Cup LLC</h2>
                    </div>
                    <div className='center'>
                        <h2>Privacy Policy | Terms of Use | Sales and Refunds | Legal</h2>
                    </div>
                    <div className='right'></div>
                </div>
            </section>
        </div>
    )
};

export default Home;
