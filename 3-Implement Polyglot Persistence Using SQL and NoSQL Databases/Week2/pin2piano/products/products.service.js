const productsDAO = require("./products.dao");

const saveProduct = (productReq) => {
  return productsDAO.saveProduct(productReq);
}

const getProductById = (productId) => {
  return productsDAO.getProductById(productId);
}

const findProductsByQuery = (productsQuery) => {
  return productsDAO.findProductsByQuery(productsQuery);
}

const updateProductDetails = (productId, updateReq) => {
  return productsDAO.updateProductDetails(productId, updateReq);
}

module.exports = {
  saveProduct,
  getProductById,
  findProductsByQuery,
  updateProductDetails
}
