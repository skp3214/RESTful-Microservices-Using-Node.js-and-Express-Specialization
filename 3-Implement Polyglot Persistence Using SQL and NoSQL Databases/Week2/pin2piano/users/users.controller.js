const usersService = require("./users.service");
const ordersService = require("../orders/orders.service");

const saveUser =  (userReq) => {
  try {
    return  usersService.saveUser(userReq);
  } catch (err) {
    throw err;
  }
}

const findUsers =  () => {
  try {
    return  usersService.findUsers();
  } catch (err) {
    throw err;
  }
}

const getUserByEmail =  (email) => {
  try {
    return  usersService.getUserByEmail(email);
  } catch (err) {
    throw err;
  }
}

const findOrdersPlacedByUser = async (userId) => {
  try {
    return await ordersService.findOrdersPlacedByUser(userId);
  } catch (err) {
    throw err;
  }
}

const getUserById =  (userId) => {
  try {
    return  usersService.getUserById(userId);
  } catch (err) {
    throw err;
  }
}

const updateUserDetails =  (userId, updateReq) => {
  try {
    return  usersService.updateUserDetails(userId, updateReq);
  } catch (err) {
    throw err;
  }
}

module.exports = {
  saveUser,
  findUsers,
  getUserByEmail,
  findOrdersPlacedByUser,
  getUserById,
  updateUserDetails
}
