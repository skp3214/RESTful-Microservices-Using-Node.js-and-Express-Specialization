const ordersDAO = require("./orders.dao");
const productsService = require("../products/products.service");
const usersService = require("../users/users.service");

const saveOrder = async (orderReq) => {
  try {
    // Fetch product details
    const product = await productsService.getProductById(orderReq.productId);
    if (product.UnitsAvailable < 1) {
      throw new Error("No units available to place order, please try later..!");
    }

    // Save order
    const savedOrder = await ordersDAO.saveOrder(orderReq);

    // Update product units
    const availableUnits = product.UnitsAvailable - savedOrder.UnitsPlaced;
    await productsService.updateProductDetails(savedOrder.ProductId, { UnitsAvailable: availableUnits });

    // Update user orders placed
    const user = await usersService.getUserById(orderReq.userId);
    const ordersPlaced = user.OrdersPlaced + orderReq.unitsPlaced;
    await usersService.updateUserDetails(orderReq.userId, { OrdersPlaced: ordersPlaced });

    return "Successfully placed order..!";

  } catch (err) {
    throw { STATUS: "DATA_ERROR", error: err.message };
  }
}

const findOrdersPlacedByUser = (userId) => {
  try {
    return ordersDAO.findOrdersPlacedByUser(userId);
  } catch (err) {
    throw { STATUS: "DATA_ERROR", error: "Encountered data error in fetching orders placed by user..!" };
  }
}

module.exports = {
  saveOrder,
  findOrdersPlacedByUser
}
