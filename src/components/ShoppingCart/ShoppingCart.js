import React, { useEffect, useRef } from 'react';
import { useShoppingCart } from '../../context/ShoppingCarContext';
import { formatPrice } from '../../utilities/formatPrice';
import { CartItem } from '../CartItem/CartItem.js';
import storeItems from '../../data/items.json';
import './ShoppingCart.css';

export const ShoppingCart = ({ isOpen }) => {
    const { closeCart, cartItems } = useShoppingCart();
    const offcanvasRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!offcanvasRef.current.contains(e.target) || e.target.classList.contains('shopping-cart-icon')) closeCart();
        }
        document.addEventListener('click', handleClickOutside, true);
    }, [closeCart]);

    return (
        <div className={isOpen ? 'offcanvas-show' : 'offcanvas-hide'} ref={offcanvasRef} >
            <div className='offcanvas-header'>
                <h1>Cart</h1>
                <button onClick={closeCart}>X</button>
            </div>
            <div className='offcanvas-body'>
                {cartItems.map(item => {
                    return <CartItem key={item.id} {...item} />
                })}
            </div>
            <div className='offcanvas-footer'>
                Total {formatPrice(cartItems.reduce((total, cartItem) => {
                    const item = storeItems.find(item => cartItem.id === item.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                }, 0))}
            </div>
        </div>
    )
};

export default ShoppingCart;
