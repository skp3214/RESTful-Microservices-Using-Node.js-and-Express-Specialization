const ordersService = require("./orders.service");

const saveOrder = (orderReq) => {
  return  ordersService.saveOrder(orderReq);
}

const findOrdersPlacedByUser =  (userId) => {
  return  ordersService.findOrdersPlacedByUser(userId);
}

module.exports = {
  saveOrder,
  findOrdersPlacedByUser
}
