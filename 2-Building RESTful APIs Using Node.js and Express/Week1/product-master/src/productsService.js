const lodash = require("lodash");
const productsList = require("./products.json").products;

const getProducts = () => {
  return JSON.stringify(productsList);
};

const getProductsById = (productId, done) => {
  const product = productsList.find(p => p.id === productId);
  if (product) {
    return done(null, JSON.stringify(product));
  } else {
    return done("Requested product doesn't exist..!");
  }
};

const saveProduct = (newProduct, done) => {
  const existingProduct = productsList.find(p => p.id === newProduct.id);
  if (existingProduct) {
    return done("Product already exists..!");
  } else {
    newProduct.id = productsList.length ? productsList[productsList.length - 1].id + 1 : 1;
    productsList.push(newProduct);
    return done(null, JSON.stringify(productsList));
  }
};

const updateProduct = (productId, updateData, done) => {
  const productIndex = productsList.findIndex(p => p.id === productId);
  if (productIndex !== -1) {
    productsList[productIndex] = { ...productsList[productIndex], ...updateData };
    return done(null, JSON.stringify(productsList));
  } else {
    return done("Requested product doesn't exist..!");
  }
};

const deleteProduct = (productId, done) => {
  const productIndex = productsList.findIndex(p => p.id === productId);
  if (productIndex !== -1) {
    productsList.splice(productIndex, 1);
    return done(null, JSON.stringify(productsList));
  } else {
    return done("Requested product doesn't exist..!");
  }
};

module.exports = {
  getProducts,
  getProductsById,
  saveProduct,
  updateProduct,
  deleteProduct
};
