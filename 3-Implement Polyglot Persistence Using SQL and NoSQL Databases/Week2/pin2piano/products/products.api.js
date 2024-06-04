const express = require('express');
const router = express.Router();
const productsCtrl = require("./products.controller");

/**
 * API to save product details
 * EFFECTIVE URL: POST /api/v1/products
 */
router.post("/", async (req, res) => {
  try {
    let productReq = {
      productName: req.body.productName || "",
      description: req.body.description || "",
      price: req.body.price || 0,
      unitsAvailable: req.body.unitsAvailable || 0,
      tags: req.body.tags || [],
      category: req.body.category || "",
    };

    const results = await productsCtrl.saveProduct(productReq);
    return res.status(200).send({ STATUS: "OK", data: results });

  } catch (error) {
    console.log("Unexpected error in saving product..!", error);
    return res.status(400).send({ STATUS: "UNEXPECTED_ERROR", error: "Unexpected error in saving product, please try later..!" });
  }
});

/**
 * API to get products by query
 * EFFECTIVE URL: GET /api/v1/products
 */
router.get('/', async (req, res) => {
  try {
    let productsQuery = {
      category: req.query.category || "",
      name: req.query.name || ""
    };

    const results = await productsCtrl.findProductsByQuery(productsQuery);
    return res.status(200).send({ STATUS: "OK", data: results });

  } catch (error) {
    console.log("Unexpected error in fetching products..!", error);
    return res.status(400).send({ STATUS: "UNEXPECTED_ERROR", error: "Unexpected error in fetching products, please try later..!" });
  }
});

/**
 * API to get the product detail by productId
 * EFFECTIVE URL: GET /api/v1/products/:productId
 */
router.get('/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    const results = await productsCtrl.getProductById(productId);
    return res.status(200).send({ STATUS: "OK", data: results });

  } catch (error) {
    console.log("Unexpected error in getting product details by productId..!", error);
    return res.status(400).send({ STATUS: "UNEXPECTED_ERROR", error: "Unexpected error in getting product details by productId, please try later..!" });
  }
});

/**
 * API to update the product detail by productId
 * EFFECTIVE URL: PUT /api/v1/products/:productId
 */
router.put('/:productId', async (req, res) => {
  try {
    const productId = req.params.productId;
    let updateReq = {
      ProductName: req.body.productName || "",
      Description: req.body.description || "",
      Price: req.body.price || 0,
      UnitsAvailable: req.body.unitsAvailable || 0,
      Tags: req.body.tags || [],
      Category: req.body.category || "",
      UpdatedOn: new Date(),
      UpdatedBy: "admin"
    };

    const results = await productsCtrl.updateProductDetails(productId, updateReq);
    return res.status(200).send({ STATUS: "OK", data: results });

  } catch (error) {
    console.log("Unexpected error in updating product details by productId..!", error);
    return res.status(400).send({ STATUS: "UNEXPECTED_ERROR", error: "Unexpected error in updating product details by productId, please try later..!" });
  }
});

module.exports = router;
