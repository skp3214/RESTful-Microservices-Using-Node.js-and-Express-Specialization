const usersDao = require("./users.dao");
const ordersDao = require("../orders/orders.dao"); // assuming orders.dao contains the method to find orders

const saveUser = async (userReq) => {
  try {
    return await usersDao.saveUser(userReq);
  } catch (err) {
    throw err;
  }
}

const findUsers = async () => {
  try {
    return await usersDao.findUsers();
  } catch (err) {
    throw err;
  }
}

const getUserByEmail = async (email) => {
  try {
    return await usersDao.getUserByEmail(email);
  } catch (err) {
    throw err;
  }
}

const getUserById = async (userId) => {
  try {
    return await usersDao.getUserById(userId);
  } catch (err) {
    throw err;
  }
}

const updateUserDetails = async (userId, updateReq) => {
  try {
    return await usersDao.updateUserDetails(userId, updateReq);
  } catch (err) {
    throw err;
  }
}

const findOrdersPlacedByUser = async (userId) => {
  try {
    return await ordersDao.findOrdersPlacedByUser(userId);
  } catch (err) {
    throw err;
  }
}

module.exports = {
  saveUser,
  findUsers,
  getUserByEmail,
  getUserById,
  updateUserDetails,
  findOrdersPlacedByUser
}
