const fs = require('fs');

const getProducts = function(done) {
    fs.readFile('src\\products.json', 'utf8', (err, data) => {
        if (err) return done(err);
        const productData = JSON.parse(data);
        done(null, productData);
    });
};

const getProductById = function(id, done) {
    getProducts((err, productData) => {
        if (err) return done(err);
        const product = productData.find(p => p.id === id);
        done(null, product);
    });
};

const saveProductDetails = function(productDetails, done) {
    getProducts((err, productData) => {
        if (err) return done(err);
        const newId = productData.length ? productData[productData.length - 1].id + 1 : 1;
        productDetails.id = newId;
        productData.push(productDetails);
        fs.writeFile('src\\products.json', JSON.stringify(productData, null, 2), (err) => {
            if (err) return done(err);
            done(null, productDetails);
        });
    });
};

const deleteProductById = function(productId, done) {
    getProducts((err, productData) => {
        if (err) return done(err);
        const newProductData = productData.filter(p => p.id !== productId);
        fs.writeFile('src\\products.json', JSON.stringify(newProductData, null, 2), (err) => {
            if (err) return done(err);
            done(null, { id: productId });
        });
    });
};

module.exports = {
    getProducts,
    getProductById,
    saveProductDetails,
    deleteProductById
};
