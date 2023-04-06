require('dotenv').config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const port = process.env.PORT || 5000;

const contactRouter = require('./contactRouter');
app.use("/contact", contactRouter);

const productsRouter = require('./productsRouter');
app.use("/products", productsRouter);

const paymentRouter = require('./paymentRouter');
app.use("/payment", paymentRouter);

const customerRouter = require('./customerRouter');
app.use("/customer", customerRouter);

const orderRouter = require('./orderRouter');
app.use("/order", orderRouter);

const orderDetailsRouter = require('./orderDetailsRouter');
app.use("/orderDetails", orderDetailsRouter);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "..", "..", "build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "..", "build", "index.html"));
    });
}

app.listen(port, () => console.log(`Listening on port ${port}`));