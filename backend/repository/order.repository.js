const db = require('../models/index.js');
const Order = db.order
const User = db.user
const Product = db.product

exports.save = async(tawar) => {
    return await Order.create(tawar);
}

exports.findById = async(id) => {
    return await Order.findByPk(id);
}

exports.findOrderByUserId = async(user_id) => {
    return await Order.findAll({include: [
        {model: User},
        {model: Product}
    ], where: {id_userPembeli: user_id}})
}

/*exports.updateStatus = async (order, ids) => {
    return await Order.update(order, { where: { id: ids }});
};*/

exports.updateStatus = async(order) => {
    return await order.save();
}