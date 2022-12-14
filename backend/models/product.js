"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Kategori, {foreignKey : 'id_kategori'})
      Product.belongsTo(models.User, {foreignKey : 'id_user'})
      Product.hasMany(models.Order, {foreignKey : 'id_product'})
    }
  }
  Product.init(
    {
      nama: DataTypes.STRING,
      harga: DataTypes.INTEGER,
      deskripsi: DataTypes.STRING,
      foto: DataTypes.STRING,
      id_user: DataTypes.INTEGER,
      id_kategori: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
