import React from 'react';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { formatPrice } from '../../utilities/formatPrice';
import './StoreItem.css';

export const StoreItem = ({ item }) => {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
    const quantity = getItemQuantity(item.id);
    return (
       <div className='item-card-container'>
            <div className='card-img-container'>
                <img className='card-img' src={require(`../../images/${item.imgUrl}.png`)} alt={item.imgUrl} />
            </div>
            <div className='name-and-price-container'>
                <h1 className='item-name'>{item.name}</h1>
                <h2 className='item-price'>{formatPrice(item.price)}</h2>
            </div>
            <div className={quantity === 0 ? 'add-to-cart' : 'change-cart-quantity'}>
                <button className='add-to-cart-button' onClick={() => increaseCartQuantity(item.id)}>+ Add To Cart</button>
                <div className='change-cart-quantity-flex-container'>
                    <div className='change-cart-quantity-row-1'>
                        <button id='change-quantity-button' onClick={() => decreaseCartQuantity(item.id)}>–</button>
                        <h3>{quantity}</h3>
                        <button id='change-quantity-button' onClick={() => increaseCartQuantity(item.id)}>+</button>
                    </div>
                    <button id='remove-button' onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
            </div>
       </div>
    )
};

export default StoreItem;