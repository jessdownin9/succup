const express = require("express");
const contactRouter = express.Router();
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
  
  contactRouter.post("/", (req, res) => {
    const customerName = req.body.customerName;
    const customerEmail = req.body.customerEmail;
    const customerPhone = req.body.customerPhone;
    const orderNumber = req.body.orderNumber;
    const customerNote = req.body.customerNote; 
    const mail = {
      from: customerName,
      to: process.env.GMAIL_USER,
      subject: `Contact Form Submission- ${customerName}`,
      html: `<p>Name: ${customerName}</p>
              <p>Email: ${customerEmail}</p>
              <p>Phone: ${customerPhone}</p>
              <p>Order Number: ${orderNumber}</p>
              <p>Message: ${customerNote}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });

  module.exports = contactRouter;