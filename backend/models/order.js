'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {foreignKey : 'id_userPembeli'});
      Order.belongsTo(models.Product, { foreignKey : 'id_product'});
    }
  }
  Order.init({
    harga_tawar: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER,
    id_userPembeli: DataTypes.INTEGER,
    isAccept: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};