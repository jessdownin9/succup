import React, { useEffect, useRef, useState } from 'react';
import './HomeCSS/Home1.css';
import './HomeCSS/Home2.css';
import './HomeCSS/Home3.css';
import './HomeCSS/Home4.css';
import "@fontsource/pavanam";
import { buttonFontAnimation } from '../animations/buttonFontAnimation';
import { useSwipeable } from 'react-swipeable';
// import { scrollBack, scrollToNext } from '../animations/scrollingAnimation';

export const Home = () => {
    const buttonRef = useRef(null);
    const [position, setPosition] = useState(3);
    const handlers = useSwipeable({
        onSwipedLeft: () => {
            console.log('swiped left');
            setPosition(position + 1);
        },
        onSwipedRight: () => {
            console.log('swiped right');
            setPosition(position - 1);
        }
    })
    
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
                    <button className='interested-button' onClick={() => window.open('https://byu.az1.qualtrics.com/jfe/form/SV_cvE3ECvmqd1PFxY','_blank')} ref={buttonRef} >I'M INTERESTED!</button>
                </div>
                <div className='headline-container'>
                    <img className='purple-cup' alt='Purple Suc Cup' src={require('../images/purplecup.png')} />
                    <h1>THE ONLY PHONE ACCESSORY YOU NEED</h1>
                </div>
            </section>

            <section className='screen3'>
                <h1>HOW WE SUC</h1>
                <div className='carousel' >
                    <input type="radio" name="position" onChange={() => setPosition(1)} checked={position === 1} />
                    <input type="radio" name="position" onChange={() => setPosition(2)} checked={position === 2} />
                    <input type="radio" name="position" onChange={() => setPosition(3)} checked={position === 3} />
                    <input type="radio" name="position" onChange={() => setPosition(4)} checked={position === 4} />
                    <input type="radio" name="position" onChange={() => setPosition(5)} checked={position === 5} />
                    <div className='carousel-images' style={{'--position': position}} {...handlers} >
                        <img className='item bathroom' alt='Phone mounted on bathroom mirror' src={require('../images/phoneinbathroom.png')} onClick={() => setPosition(1)} />
                        <img className='item kitchen' alt='Phone mounted above kitchen stove' src={require('../images/phoneinkitchen.jpg')} onClick={() => setPosition(2)} />
                        <img className='item car' alt='Phone mounted on interior of car' src={require('../images/phoneincar.jpg')} onClick={() => setPosition(3)} />
                        <img className='item shower' alt='Phone mounted on shower wall' src={require('../images/phoneinshower.png')} onClick={() => setPosition(4)} />
                        <img className='item desk' alt='Phone propped up on desk' src={require('../images/phoneondesk.png')} onClick={() => setPosition(5)} />
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
                    <div className='right'>
                        <h2>succup22@gmail.com</h2>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Home;
