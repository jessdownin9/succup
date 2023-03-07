import React, { useState } from 'react';
import "@fontsource/pavanam";
import './Contact.css';
import { config } from '../../api/config';

export const Contact = () => {
    const [status, setStatus] = useState('SUBMIT');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('SENDING');
        const { customerName, customerEmail, customerPhone, orderNumber, customerNote } = e.target.elements;
        let details = {
            customerName: customerName.value,
            customerEmail: customerEmail.value,
            customerPhone: customerPhone.value,
            orderNumber: orderNumber.value,
            customerNote: customerNote.value
        };
        let response = await fetch(`${config.url}/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(details)
        });
        setStatus('SUBMIT');
        let jsonResponse = await response.json();
        alert(jsonResponse.status);
    }
    return (
        <div className='contact-container'>
            <div className="contact-us">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="customerName">NAME <em>&#x2a;</em></label>
                    <input id="customerName" name="customerName" required="" type="text" />
                    <label htmlFor="customerEmail">EMAIL <em>&#x2a;</em></label>
                    <input id="customerEmail" name="customerEmail" required="" type="email" />
                    <label htmlFor="customerPhone">PHONE</label>
                    <input id="customerPhone" name="customerPhone" pattern="^(\+0?1\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$" type="tel" />
                    <label htmlFor="orderNumber">ORDER NUMBER</label>
                    <input id="orderNumber" name="orderNumber" type="text" />
                    <label htmlFor="customerNote">YOUR MESSAGE <em>&#x2a;</em></label>
                    <textarea id="customerNote" name="customerNote" required="" rows="4"></textarea>
                    <h3>Please provide all the information about your issue you can.</h3>
                    <button id="customerOrder">{status}</button>
                </form>
            </div>
        </div>
    )
};

export default Contact;