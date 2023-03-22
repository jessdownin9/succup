const express = require("express");
const customerRouter = express.Router();
const db = require('../db/index');
  
customerRouter.post('/', (req, res) => {
    const fullname = req.body.fullname;
    const email = req.body.email;
    const phone = req.body.phone;
    const address = req.body.address[0] + ', ' + req.body.city[0] + ', ' + req.body.state[0] + ', ' + req.body.zipcode[0];

    db.query('INSERT INTO customers(email, full_name, billing_address, default_shipping_address, phone) VALUES($1, $2, $3, $4, $5)',
        [email, fullname, address, address, phone], 
        (err, result) => {
            if (err) throw err;
            console.log('Customer info added to database!')
        }
    );
});

module.exports = customerRouter;