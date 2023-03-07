import React, { useState } from 'react';
import './NavigationBar.css';
import "@fontsource/pavanam";
import { scrollToTop } from '../../animations/scrollingAnimation';
import { useNavigate, useLocation } from 'react-router-dom';
import { useShoppingCart } from '../../context/ShoppingCartContext';

export function NavigationBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [ checked, setCheck ] = useState(false);
    const { isOpen, closeCart, openCart, cartQuantity } = useShoppingCart();

    const handleMenuHomeClick = () => {
        if (location.pathname === '/home') {
            scrollToTop();
        } else {
            navigate('/home');
        }
    }

    return (
        <div className="navigation-bar">
            <img className='logo' src={require('../../images/blacklogotransbackground.png')} alt='Suc Cup logo' onClick={handleMenuHomeClick} />
            <img className={cartQuantity > 0 ? 'shopping-cart-icon' : 'hidden-shopping-cart-icon'} src={require('../../images/shoppingcarticon.png')} alt='Shopping cart icon' onClick={isOpen ? closeCart : openCart} />
            <div className={cartQuantity > 0 ? 'cart-count' : 'hidden-cart-count'}>{cartQuantity > 99 ? '99+' : cartQuantity}</div>
            <input id="menu-toggle" type="checkbox" onChange={() => setCheck(!checked)} checked={checked} />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li onClick={() => {
                    handleMenuHomeClick();
                    setCheck(!checked);
                }}>HOME</li>
                <li onClick={() => {
                    navigate('/shop');
                    setCheck(!checked);
                }}>SHOP</li>
                <li onClick={() => {
                    navigate('/contact');
                    setCheck(!checked);
                }}>CONTACT</li>
                <li>ABOUT US</li>
            </ul>
        </div>
    );
};
