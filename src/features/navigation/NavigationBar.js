import React from 'react';
import './NavigationBar.css';
import "@fontsource/pavanam";
import { scrollToTop } from '../../animations/scrollingAnimation';
import { useNavigate, useLocation } from 'react-router-dom';

export function NavigationBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleMenuHomeClick = () => {
        if (location.pathname === '/home') {
            scrollToTop();
        } else {
            navigate('/home');
        }
    }

    return (
        <div className="navigation-bar">
            <img className='logo' src={require('../../images/blacklogotransbackground.png')} alt='Suc Cup logo' onClick={scrollToTop} />
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li onClick={handleMenuHomeClick}>HOME</li>
                <li>SHOP</li>
                <li onClick={() => navigate('/contact')}>CONTACT</li>
                <li>ABOUT US</li>
            </ul>
        </div>
    );
};
