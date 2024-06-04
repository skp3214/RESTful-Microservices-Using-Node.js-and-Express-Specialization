const { v4: uuidv4 } = require("uuid");
const Product = require('./products.entity');

const saveProduct = (productReq) => {
  return new Promise((resolve, reject) => {
    const newProduct = new Product({
      productId: uuidv4(),
      productName: productReq.productName,
      description: productReq.description,
      price: productReq.price,
      unitsAvailable: productReq.unitsAvailable,
      tags: productReq.tags,
      category: productReq.category,
      updatedOn: new Date(),
      updatedBy: "system" // replace with actual user if needed
    });

    newProduct.save((err, product) => {
      if (err) return reject(err);
      resolve(product);
    });
  });
}

const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    Product.findOne({ productId }, (err, product) => {
      if (err) return reject(err);
      resolve(product);
    });
  });
}

const findProductsByQuery = (productsQuery) => {
  return new Promise((resolve, reject) => {
    let query = {};

    if (productsQuery.category && productsQuery.name) {
      query = {
        cachesategory: productsQuery.category,
        productName: { $regex: new RegExp(productsQuery.name, "i") }
      };
    } else if (productsQuery.category) {
      query = { category: productsQuery.category };
    } else if (productsQuery.name) {
      query = { productName: productsQuery.name };
    }

    Product.find(query, (err, products) => {
      if (err) return reject(err);
      resolve(products);
    });
  });
}


const updateProductDetails = (productId, updateReq) => {
  return new Promise((resolve, reject) => {
    Product.findOneAndUpdate({ productId }, updateReq, { new: true }, (err, product) => {
      if (err) return reject(err);
      resolve(product);
    });
  });
}

module.exports = {
  saveProduct,
  getProductById,
  findProductsByQuery,
  updateProductDetails
}
