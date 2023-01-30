import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

export function NavigationBar() {
    return (
        <div className="navigation-bar">
            <Link to={'/'}>
                <img className='logo' src={require('../../images/blacklogotransbackground.png')} alt='Suc Cup logo' />
            </Link>
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li>LOGIN</li>
                <li>SHOP</li>
                <li>CONTACT</li>
                <li>ABOUT US</li>
            </ul>
        </div>
    );
};
