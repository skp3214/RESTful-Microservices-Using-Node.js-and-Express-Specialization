const Product = require('./product.dao');

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty"
        });
    }

    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });

    Product.create(product, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the product."
            });
        } else {
            res.send(data);
        }
    });
};

exports.getAll = (req, res) => {
    const name = req.query.name;

    Product.getAll(name, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        } else {
            res.send(data);
        }
    });
};

exports.findById = (req, res) => {
    const id = req.params.id;

    Product.findById(id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Product with id ${id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Product with id " + id
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.updateById = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
    }

    const id = req.params.id;

    Product.updateById(id, new Product(req.body), (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Product with id ${id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error updating Product with id " + id
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.remove = (req, res) => {
    const id = req.params.id;

    Product.remove(id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Product with id ${id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Product with id " + id
                });
            }
        } else {
            res.send({ message: `Product was deleted successfully!` });
        }
    });
};

exports.removeAll = (req, res) => {
    Product.removeAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while removing all products."
            });
        } else {
            res.send({ message: `All Products were deleted successfully!` });
        }
    });
};

exports.getCostlyProduct = (req, res) => {
    const price = req.params.price;

    Product.getCostlyProduct(price, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving costly products."
            });
        } else {
            res.send(data);
        }
    });
};
