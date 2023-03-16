import React, { useEffect, useState } from 'react';
import './Purchase.css';
import { StripeContainer } from '../../components/PaymentForm/StripeContainer';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, selectItems, selectLoaded } from '../../components/StoreItem/storeItemsSlice';
import { CartItem } from '../../components/CartItem/CartItem';
import { formatPrice } from '../../utilities/formatPrice';

export const Purchase = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [sameAddress, setSameAddress] = useState(true);
    const [infoSubmitted, setInfoSubmitted] = useState(false);
    const { cartItems } = useShoppingCart();
    const hasLoaded = useSelector(selectLoaded);
    const storeItems = useSelector(selectItems);
    const dispatch = useDispatch();
    const shippingCost = 1.26;

    // const handleSubmit = async (e)  => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch('/payment', {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json;charset=utf-8"
    //             },
    //             body: JSON.stringify({
    //                 amount,
    //                 id
    //             })
    //         });
    //         if (response.status === 200) {
    //             console.log('Successful payment');
    //             setSuccess(true);
    //         }
    //      } catch (error) {
    //         console.log('Error: ', error);
    //      }
    // };
    
    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    return (
       <div className='purchase-page'>
            <form className={infoSubmitted ? 'hide': 'purchase-form'} action='/customer' method='POST' >
                <div className='shipping-info'>
                    <h2>Shipping Address</h2>
                    <div className='column1'>   
                        <label htmlFor="fullname">Full Name</label>
                        <input 
                            type="text" 
                            id="fullname" 
                            name="fullname" 
                            value={fullname} 
                            onChange={(e) => setFullname(e.target.value)}
                            required 
                        />
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            id="email" 
                            name="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                        <label htmlFor="phone">Phone Number</label>
                        <input 
                            type="text" 
                            id="phone" 
                            name="phone" 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required 
                        />
                    </div>
                    <div className='column2'>
                        <label htmlFor="address">Address</label>
                        <input 
                            type="text" 
                            id="address" 
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)} 
                            required 
                        />
                        <label htmlFor="city">City</label>
                        <input 
                            type="text" 
                            id="city" 
                            name="city"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}  
                            required 
                        />
                        <label htmlFor="state">State</label>
                        <input 
                            type="text" 
                            id="state" 
                            name="state" 
                            value={state}
                            onChange={(e) => setState(e.target.value)} 
                            required 
                        />
                        <label htmlFor="zipcode">Zip Code</label>
                        <input 
                            type="text" 
                            id="zipcode" 
                            name="zipcode" 
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className='billing-info'>
                    <div className='billing-info-header'>
                        <h2>Billing Address</h2>
                        <label htmlFor='sameAddress'>Billing address same as shipping</label>
                        <input type="checkbox" id="sameAddress" name="sameAddress" onChange={() => setSameAddress(!sameAddress)} defaultChecked />
                    </div>
                    <div className={sameAddress ? 'hide' : 'column1'}>
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" />
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city" />
                    </div>
                    <div className={sameAddress ? 'hide' : 'column2'}>
                        <label htmlFor="state">State</label>
                        <input type="text" id="state" name="state" />
                        <label htmlFor="zipcode">Zip Code</label>
                        <input type="text" id="zipcode" name="zipcode" />
                    </div>
                </div>
                <div className={infoSubmitted ? 'hide' : 'payment-button-container'}>
                    <button type='submit'>Continue To Payment</button>
                </div>
            </form>
            <div className='order-summary'>
                <h2>Order Summary</h2>
                {hasLoaded && cartItems.map((cartItem, index) => {
                    const item = storeItems.find(storeItem => storeItem.id === cartItem.id);
                    return <CartItem key={index} quantity={cartItem.quantity} item={item} />
                })}
                <h4>+ Shipping {formatPrice(shippingCost)}</h4>
                <h3>Total {hasLoaded && formatPrice(shippingCost + cartItems.reduce((total, cartItem) => {
                    const item = storeItems.find(storeItem => cartItem.id === storeItem.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                }, 0))}</h3>
            </div>
            <div className={infoSubmitted ? 'payment-info' : 'hide'}>
                <h2>Payment Information</h2>
                <div className='stripe-container-container'>
                    <StripeContainer 
                        amount={Math.round((shippingCost + cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find(storeItem => cartItem.id === storeItem.id);
                            return total + (item?.price || 0) * cartItem.quantity;
                        }, 0)) * 100)} 
                    />
                    <button className='payment-back-button' onClick={() => setInfoSubmitted(false)}>Back</button>
                </div>
            </div>
       </div>
    )
};

export default Purchase;