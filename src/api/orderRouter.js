const express = require("express");
const orderRouter = express.Router();
const db = require('../db/index');

orderRouter.post('/', (req, res) => {
    const { amount, shippingAddress, email, cartItems } = req.body;
  
    db.query('INSERT INTO orders(customer_id, total, shipping_address, order_email, order_date) VALUES((SELECT MAX(id) FROM customers WHERE email=$1), $2, $3, $4, $5) RETURNING id',
      [email, amount / 100, shippingAddress, email, new Date()],
      (err, result) => {
        if (err) {
          throw err;
        } else {
          const orderId = result.rows[0].id;
          const detailQueries = cartItems.map(cartItem => {
            return db.query('INSERT INTO order_details(order_id, product_id, price, quantity) VALUES($1, $2, (SELECT price FROM products WHERE id=$3), $4)',
              [orderId, cartItem.id, cartItem.id, cartItem.quantity]);
          });
          Promise.all(detailQueries)
            .then(() => {
              console.log('Order details added to database!');
              res.sendStatus(201);
            })
            .catch(err => {
              console.log('Error adding order details to database:', err);
              res.sendStatus(500);
            });
        }
      }
    );
});

module.exports = orderRouter;
