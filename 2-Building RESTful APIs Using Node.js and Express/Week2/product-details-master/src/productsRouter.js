const express = require('express');
const router = express.Router();
const productsController = require('./productsController');

router.get("/", (req, res) => {
    try {
        productsController.getProducts((err, results) => {
            if (err) {
                return res.status(400).json({ STATUS: 'ERROR', message: err.message });
            }
            res.status(200).json({ STATUS: 'OK', data: results });
        });
    } catch (err) {
        res.status(400).json({ STATUS: 'ERROR', message: 'Some error occurred' });
    }
});

router.get("/:productId", (req, res) => {
    try {
        const productId = parseInt(req.params.productId, 10);
        productsController.getProductById(productId, (err, result) => {
            if (err) {
                return res.status(400).json({ STATUS: 'ERROR', message: err.message });
            }
            res.status(200).json({ STATUS: 'OK', data: result });
        });
    } catch (err) {
        res.status(400).json({ STATUS: 'ERROR', message: 'Some error occurred' });
    }
});

router.post("/", (req, res) => {
    try {
        const productDetails = req.body;
        productsController.saveProductDetails(productDetails, (err, result) => {
            if (err) {
                return res.status(400).json({ STATUS: 'ERROR', message: err.message });
            }
            res.status(201).json({ STATUS: 'OK', data: result });
        });
    } catch (err) {
        res.status(400).json({ STATUS: 'ERROR', message: 'Some error occurred' });
    }
});

router.delete("/:productId", (req, res) => {
    try {
        const productId = parseInt(req.params.productId, 10);
        productsController.deleteProductById(productId, (err, result) => {
            if (err) {
                return res.status(400).json({ STATUS: 'ERROR', message: err.message });
            }
            res.status(200).json({ STATUS: 'OK', data: result });
        });
    } catch (err) {
        res.status(400).json({ STATUS: 'ERROR', message: 'Some error occurred' });
    }
});

module.exports = router;
