import React from 'react';
import './Shop.css';
import storeItems from '../../data/items.json';
import { StoreItem } from '../../components/StoreItem/StoreItem';

export const Shop = () => {
    return (
       <div className='shop-container'>
            {storeItems.map(item => (
                <StoreItem key={item.id} item={item} />
            ))}
       </div>
    )
};

export default Shop;