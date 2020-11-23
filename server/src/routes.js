const Router = require("express");
const Controller = require("./controllers");

const router = Router();

router.get("/", (req, res) => {
  const { limit, offset } = req.query;
  Controller.findAllProducts(limit, offset)
    .then((products) => res.send(products))
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
