const express = require("express");
const orderRouter = express.Router();
const db = require('../db/index');

orderRouter.post('/', (req, res) => {
    const { amount, shippingAddress, email, cartItems } = req.body;
    db.query('BEGIN;');
    db.query('INSERT INTO orders(customer_id, total, shipping_address, order_email, order_date) VALUES((SELECT MAX(id) FROM customers WHERE email=$1), $2, $3, $4, $5) RETURNING id',
        [email, amount, shippingAddress, email, new Date()], 
        (err, result) => {
            if (err) {
                db.query('ROLLBACK;');
                throw err;
            } else {
                const order_id = result.rows[0].id;
                cartItems.forEach(cartItem => {
                    db.query('INSERT INTO order_details(order_id, product_id, price, quantity) VALUES($1, $2, (SELECT price FROM products WHERE id=$3), $4)',
                        [order_id, cartItem.id, cartItem.id, cartItem.quantity], 
                        (err, result) => {
                            if (err) {
                                db.query('ROLLBACK;');
                                throw err;
                            } else {
                                console.log('Order details added to database!');
                            }
                        }
                    );
                });
                db.query('COMMIT;');
                console.log('Order info added to database!');
            }
        }
    );
});

module.exports = orderRouter;
