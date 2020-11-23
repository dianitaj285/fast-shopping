"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ProductsCategories", {
      productId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: "Products", key: "id" },
      },
      categoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: "Categories", key: "id" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ProductCategories");
  },
};
