const express = require("express");
const customerRouter = express.Router();
const db = require('../db/index');
  
customerRouter.post('/', (req, res) => {
    const fullname = req.body.fullname;
    const email = req.body.fullname;
    const phone = req.body.phone;
    const address = req.body.address[0] + ', ' + req.body.city[0] + ', ' + req.body.state[0] + ', ' + req.body.zipcode[0];

    db.query(`INSERT INTO customers (email, full_name, billing_address, default_shipping_address, phone) 
        VALUES (${email}, ${fullname}, ${address}, ${address}, ${phone})`, (err, res) => {
            if (err) throw err;
            res.status(200);
        }
    );
});

module.exports = customerRouter;