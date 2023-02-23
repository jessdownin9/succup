require('dotenv').config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.get('/', (req, res) => {
  res.send('Hello from the root application URL');
});

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

  router.post("/contact", (req, res) => {
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

app.listen(port, () => console.log("Server Running"));