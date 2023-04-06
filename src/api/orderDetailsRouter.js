const express = require("express");
const orderDetailsRouter = express.Router();
const db = require('../db/index');

orderDetailsRouter.post('/', (req, res) => {
    const { cartItems, email } = req.body;
    cartItems.forEach(cartItem => {
        db.query('INSERT INTO order_details(order_id, product_id, price, quantity) SELECT orders.id, $1, $2, $3 FROM orders WHERE order_email=$4 ORDER BY id DESC LIMIT 1',
            [cartItem.id, 8.00, cartItem.quantity, email], 
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

module.exports = orderDetailsRouter;