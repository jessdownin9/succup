require('dotenv').config();
const express = require("express");
const paymentRouter = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

paymentRouter.post('/', cors(), async (req, res) => {
    let { amount, id } = req.body;
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Suc Cup",
            payment_method: id,
            confirm: true
        });
        console.log('Payment:', payment);
        res.json({
            message: "Payment successful",
            success: true
        });
    } catch (err) {
        console.log('Error:', err);
        res.json({
            message: "Payment failed",
            success: false
        });
    }
});

module.exports = paymentRouter;