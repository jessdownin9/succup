import React from 'react';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import './CartItem.css';
import { formatPrice } from '../../utilities/formatPrice';

export const CartItem = ({ quantity, item }) => {
    const { removeFromCart } = useShoppingCart();
    const imgurl = process.env.NODE_ENV === 'production' ? item.imgurl : item.imgUrl;

    if (!item) return null;
    return (
       <div className='cart-item-container'>
            <img className='cart-item-img' src={require(`../../images/${imgurl}.png`)} alt={imgurl} />
            <div className='cart-item-info-container'>
                <div className='cart-item-name-price'>
                    <h1>{item.name} <span className={quantity > 1 ? 'text-muted' : 'text-muted-none'}>x{quantity}</span></h1>
                    <h2>{formatPrice(item.price)}</h2>
                </div>
                <div className='cart-item-total-remove'>
                    <h3>{formatPrice(item.price * quantity)}</h3>
                    <button className='cart-item-remove' onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            </div>
       </div>
    )
};

export default CartItem;