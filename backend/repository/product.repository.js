const db = require("../models/index.js");
const Product = db.product;
const Kategori = db.kategori;
const User = db.user;
const Order = db.order;

exports.save = async (product) => {
  return await Product.create(product);
};

exports.findAll = async () => {
  return await Product.findAll({include : [{model : User}, {model : Kategori}, {model : Order}], attributes:{exclude: ['id_user', 'id_kategori']}} );
};

exports.findById = async (id) => {
  return await Product.findByPk(id, {include: [{model : User}, {model : Kategori}], attributes: {exclude: ['id_user', 'id_kategori']}});
};

exports.update = async (product, ids) => {
  return await Product.update(product, { where: { id: ids }});
};

exports.delete = async (product) => {
  product.destroy();
};
