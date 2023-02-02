import React, { useEffect, useRef } from 'react';
import './Home1.css';
import './Home2.css';
import './Home3.css';
import './Home4.css';
import "@fontsource/pavanam";
import "@fontsource/londrina-shadow";
import { buttonFontAnimation } from '../animations/buttonFontAnimation';
import { changeSize, findPicX, findPicY } from '../animations/bubbleZoomAnimation';
import { scrollBack, scrollToNext } from '../animations/scrollingAnimation';

export const Home = () => {
    const buttonRef = useRef(null);
    const imgContainerRef = useRef(null);
    const carRef = useRef(null);
    const kitchenRef = useRef(null);
    const showerRef = useRef(null);
    const bathroomRef = useRef(null);
    const deskRef = useRef(null);    

    useEffect(() => {
        // Scrolling animation
        document.addEventListener('wheel', (e) => {
            if (e.deltaY > 0) {
                scrollToNext();
            } else if (e.deltaY < 0) {
                scrollBack();
            }
        })

        // 'I'm Interested!' button blinking animation
        buttonFontAnimation(buttonRef.current, ['Londrina Solid', 'Londrina Shadow']);

        // Picture bubble grow/shrink animation
        imgContainerRef.current.addEventListener('mousemove', (e) => {            
            changeSize(carRef.current, findPicX(carRef.current), findPicY(carRef.current), e);
            changeSize(kitchenRef.current, findPicX(kitchenRef.current), findPicY(kitchenRef.current), e);
            changeSize(showerRef.current, findPicX(showerRef.current), findPicY(showerRef.current), e);
            changeSize(bathroomRef.current, findPicX(bathroomRef.current), findPicY(bathroomRef.current), e);
            changeSize(deskRef.current, findPicX(deskRef.current), findPicY(deskRef.current), e);
        }, false);
    }, []);

    return (
        <div className="home">
            <section className='screen1'>
                <img className='green-cup' alt='Green Suc Cup' src={require('../images/greencup.png')} />
                <img className='main-logo' alt='Suc Cup logo' src={require('../images/logosemitransparentbackground.png')} />
            </section>

            <section className='screen2'>
                <div className='paragraph-container'>
                    <p>The Suc Cup is your modern all-in-one phone accessory. Utilizing durable yet flexible silicone, the Suc Cup allows you to mount your phone to any non-porous surface for your watching, filming, picture taking, or any other phone use desire. The Suc Cup can be stuck to your phone and then to the other surface you wish to mount it to with a simple push. And with tabs on each cup, you can remove the Suc Cup with ease. The included key ring allows you to store the Suc Cup on your key chain as a functional and stylish key chain ornament.</p>
                </div>
                <button className='interested-button' ref={buttonRef}>I'M INTERESTED!</button>
                <img className='purple-cup' alt='Purple Suc Cup' src={require('../images/purplecup.png')} />
                <div className='headline-container'>
                    <h1>THE ONLY PHONE ACCESSORY YOU NEED</h1>
                </div>
            </section>

            <section className='screen3'>
                <h1>HOW WE SUC</h1>
                <div className='image-container' ref={imgContainerRef}>
                    <div className='first-row'>
                        <img className='bathroom' alt='Phone mounted on bathroom mirror' src={require('../images/phoneinbathroom.png')} ref={bathroomRef} />
                        <img className='kitchen' alt='Phone mounted above kitchen stove' src={require('../images/phoneinkitchen.jpg')} ref={kitchenRef} />
                        <img className='car' alt='Phone mounted on interior of car' src={require('../images/phoneincar.jpg')} ref={carRef} />
                        <img className='shower' alt='Phone mounted on shower wall' src={require('../images/phoneinshower.png')} ref={showerRef} />
                        <img className='desk' alt='Phone propped up on desk' src={require('../images/phoneondesk.png')} ref={deskRef} />
                    </div>
                </div>
            </section>

            <section className='screen4'>
                <div className='keychain-headline-container'>
                    <h1>EASY STORAGE ON YOUR KEYCHAIN</h1>
                </div>
                <div className='footer-container'>
                    <h2 className='left'>© 2022 Suc Cup LLC</h2>
                    <h2 className='center'>Privacy Policy | Terms of Use | Sales and Refunds | Legal</h2>
                </div>
            </section>
        </div>
    )
};

export default Home;
