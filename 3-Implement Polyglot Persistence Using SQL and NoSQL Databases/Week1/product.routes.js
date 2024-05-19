module.exports = app => {
    const product = require('./product.controller');
    const router = require('express').Router();

    // Create a new product
    router.post("/", product.create);

    // Retrieve all products
    router.get("/", product.getAll);

    // Retrieve all costly products
    router.get("/price/:price", product.getCostlyProduct);

    // Retrieve a single product with id
    router.get("/:id", product.findById);

    // Update a product with id
    router.put("/:id", product.updateById);

    // Delete a product with id
    router.delete("/:id", product.remove);

    // Delete all products
    router.delete("/", product.removeAll);

    app.use('/api/product', router);
};
