const { Products, Categories } = require("./database/models");

module.exports = {
  async findAllProducts(limit, offset) {
    const productsPromise = Products.findAll({
      include: { model: Categories, attributes: ["name"] },
      limit,
      offset,
    });
    const totalPromise = Products.count();
    return Promise.all([
      productsPromise,
      totalPromise,
    ]).then(([products, total]) => ({ rows: products, total }));
  },
};
