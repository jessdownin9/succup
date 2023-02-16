import React from 'react';
import './NavigationBar.css';
import "@fontsource/pavanam";
import { scrollToTop } from '../../animations/scrollingAnimation';

export function NavigationBar() {
    return (
        <div className="navigation-bar">
            <img className='logo' src={require('../../images/blacklogotransbackground.png')} alt='Suc Cup logo' onClick={scrollToTop} />
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li>HOME</li>
                <li>SHOP</li>
                <li>CONTACT</li>
                <li>ABOUT US</li>
            </ul>
        </div>
    );
};
