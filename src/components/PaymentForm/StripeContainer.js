import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { PaymentForm } from './PaymentForm';

const PUBLIC_KEY = "pk_test_51MjpCFBLEr2wfPgCajWAFPBqlq4OGKxIvjIj1nRd4itsugAAfNMTtl8Q9dxiurhVKbpZNTvQoxFOS8odf52Lppn900G0dRQCtc";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

export const StripeContainer = () => {
    return (
       <Elements stripe={stripeTestPromise}>
            <PaymentForm />
       </Elements>
    )
};

export default StripeContainer;
