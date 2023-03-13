import React, { useEffect } from 'react';
import './Shop.css';
import { StoreItem } from '../../components/StoreItem/StoreItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, selectItems, selectLoaded } from '../../components/StoreItem/storeItemsSlice';

export const Shop = () => {
    const dispatch = useDispatch();
    const storeItems = useSelector(selectItems);
    const hasLoaded = useSelector(selectLoaded);
    
    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    return (
       <div className='shop-container'>
            <h1>{hasLoaded}</h1>
            <h1>{storeItems}</h1>
            {hasLoaded && storeItems.map((item, index) => {
                return <StoreItem item={item} key={index} />;
            })}
       </div>
    )
};

export default Shop;