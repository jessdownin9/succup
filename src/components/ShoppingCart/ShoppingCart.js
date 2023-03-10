import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatPrice } from '../../utilities/formatPrice';
import { CartItem } from '../CartItem/CartItem.js';
import { selectItems, selectLoaded } from '../StoreItem/storeItemsSlice';
import './ShoppingCart.css';

export const ShoppingCart = ({ isOpen }) => {
    const { closeCart, cartItems } = useShoppingCart();
    const storeItems = useSelector(selectItems);
    const offcanvasRef = useRef(null);
    const hasLoaded = useSelector(selectLoaded);

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
                {hasLoaded && cartItems.map((cartItem, index) => {
                    const item = storeItems.find(storeItem => storeItem.id === cartItem.id);
                    return <CartItem key={index} quantity={cartItem.quantity} item={item} />
                })}
            </div>
            <div className='offcanvas-footer'>
                <h4>Total {hasLoaded && formatPrice(cartItems.reduce((total, cartItem) => {
                    const item = storeItems.find(storeItem => cartItem.id === storeItem.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                }, 0))}</h4>
                <button>Proceed to Checkout</button>
            </div>
        </div>
    )
};

export default ShoppingCart;
