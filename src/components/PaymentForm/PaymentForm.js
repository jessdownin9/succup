import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './PaymentForm.css';

export const PaymentForm = ({ amount }) => {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const CARD_OPTIONS = {
        iconStyle: 'solid',
        style: {
            base: {
                iconColor: 'c4f0ff',
                color: '#black',
                fontWeight: 500,
                fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                fontSize: '16px',
                fontSmoothing: 'antialiased',
                ':-webkit-autofill': { color: '#fce883' },
                '::placeholder': { color: '#87bbfd' }
            },
            invalid: {
                iconColor: 'red',
                color: 'red'
            }
        }
    }

    const handleSubmit = async (e)  => {
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });
        if (!error) {
            try {
               const {id} = paymentMethod;
               const response = await fetch('/payment', {
                   method: "POST",
                   headers: {
                       "Content-Type": "application/json;charset=utf-8"
                   },
                   body: JSON.stringify({
                       amount,
                       id
                   })
               });
               if (response.status === 200) {
                   console.log('Successful payment');
                   setSuccess(true);
               }
            } catch (error) {
               console.log('Error: ', error);
            }
        } else {
            console.log(error.message);
        }
    };

    return (
        <div className='payment-form'>
            {!success ? 
            <form onSubmit={handleSubmit}>
                <fieldset className='form-group'>
                    <div className='form-row'>
                        <CardElement className='card-element' options={CARD_OPTIONS} />
                    </div>
                </fieldset>
                <button className='payment-button'>Submit Payment</button>
            </form> :
            <div>
                <h3 className='payment-success-message'>Your payment was successful!</h3>
            </div>
            }
        </div>
    )
};

export default PaymentForm;
