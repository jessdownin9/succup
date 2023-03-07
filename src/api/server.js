require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

const contactRouter = require('./contactRouter');
app.use("/contact", contactRouter);

const productsRouter = require('./productsRouter');
app.use("/products", productsRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));