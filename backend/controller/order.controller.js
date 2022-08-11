const { request, response } = require('express');
const orderService = require('../service/order.service');

exports.createOrderApi = async(request, response) =>{
    const tawar = await orderService.createTawar(request, request.params.id);

    if (tawar != null) {
        response.json({ data: tawar });
      } else {
        response.status(404).json({ error: "You're a seller or product not found!!" });
      }
}

exports.findOrderByUserIdApi = async(request, response) => {
  const order = await orderService.getOrderByIdUser(request);

  response.json({ data: order });
}

exports.updateStatusOrderApi = async(request, response) => {
  const order = await orderService.updateStatus(request, request.params.id);

  if (order == null) {
    response.status(404).json({ error: "Update gagal" });
  } else {
    response.json({ message: "Updated successfully" });
  }
}