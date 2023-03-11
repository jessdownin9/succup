require('dotenv').config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') app.use(express.static(path.join(__dirname, 'build')));
console.log(path.join(__dirname, 'build'));

const contactRouter = require('./contactRouter');
app.use("/contact", contactRouter);

const productsRouter = require('./productsRouter');
app.use("/products", productsRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));