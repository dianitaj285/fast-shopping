const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000;
const { Products, Categories } = require("./database/models");
const productsRoutes = require("./routes");

app = express();

app.use(bodyParser.json());

app.use("/products", productsRoutes);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
