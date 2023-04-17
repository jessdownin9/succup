const express = require("express");
const emailReceiptRouter = express.Router();
const nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });
  
  emailReceiptRouter.post("/", (req, res) => {
    const customerEmail = {
      from: process.env.GMAIL_USER,
      to: req.body.email,
      subject: 'Suc Cup Order Confirmation',
      html: `<p>Thank you for submitting an order!</p>
              <p>Your payment of $${req.body.amount / 100} was received.</p>
              <p>Your order will ship to ${req.body.shippingAddress}</p>
              <p>Please respond to this email if you need assistance.</p>`,
    };
    contactEmail.sendMail(customerEmail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });

    const providerEmail = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: 'URGENT - Order Submitted',
        html: `<p>An order was made.</p>
                <p>Total: $${req.body.amount / 100}</p>
                <p>Email address: ${req.body.email}</p>
                <p>Shipping address: ${req.body.shippingAddress}</p>`,
      };
      contactEmail.sendMail(providerEmail, (error) => {
        if (error) {
          res.json({ status: "ERROR" });
        } else {
          res.json({ status: "Message Sent" });
        }
      });
  });

  module.exports = emailReceiptRouter;