const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000;
const { Products, Categories } = require("./database/models");
const productsRoutes = require("./routes");

app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  Products.findAndCountAll({
    include: Categories,
  })
    .then((result) => res.send(result))
    .catch(console.error);
});

app.get("/test", async (req, res) => {
  Products.create({
    name: "toy",
    description: "baby pink toy",
    price: 5000,
  }).then((product) => {
    return product.addCategories([1, 2]).then(() => {
      res.send(product);
    });
  });
});

app.use("/products", productsRoutes);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
