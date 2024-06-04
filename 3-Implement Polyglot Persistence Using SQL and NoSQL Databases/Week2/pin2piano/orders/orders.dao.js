const { v4: uuidv4 } = require("uuid");
const Order = require("./orders.entity");

/* 
  saveOrder should be a function that calls the save() function on Orders Model 
  to persist order data in MongoDB Orders collection of shoppingcartDB
*/
const saveOrder = async function (orderReq) {
  try {
    const order = new Order({
      orderId: uuidv4(),
      orderName: orderReq.orderName,
      productId: orderReq.productId,
      productName: orderReq.productName,
      userId: orderReq.userId,
      userName: orderReq.userName,
      unitsPlaced: orderReq.unitsPlaced,
    });

    const savedOrder = await order.save();
    return savedOrder;
  } catch (err) {
    throw err;
  }
};

/* 
  findOrdersPlacedByUser should be a function that calls the find() function on Orders Model 
  to fetch all documents from Orders collection of shoppingcartDB,
  containing data of Orders for a given UserId
*/
const findOrdersPlacedByUser = async function (userId) {
  try {
    const orders = await Order.find({ userId: userId });
    return orders;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  saveOrder,
  findOrdersPlacedByUser
};
