const express = require("express");
const orderRouter = express.Router();
const db = require('../db/index');

orderRouter.post('/', (req, res) => {
    const { amount, shippingAddress, email, cartItems } = req.body;

    db.query('INSERT INTO orders(customer_id, total, shipping_address, order_email, order_date) SELECT customers.id, $1, $2, $3, $4 FROM customers WHERE email=$5 ORDER BY id DESC LIMIT 1',
        [amount, shippingAddress, email, new Date(), email], 
        (err, result) => {
            if (err) throw(err);
            console.log('Order info added to database!')
        }
    );

    cartItems.forEach(cartItem => {
        db.query('INSERT INTO order_details(order_id, product_id, price, quantity) VALUES(lastval(), $1, $2, $3)',
            [cartItem.id, 8.00, cartItem.quantity], 
            (err, result) => {
                if (err) {
                    throw err;
                } else {
                    console.log('Order details added to database!')
                }
            }
        );
    });
});

module.exports = orderRouter;