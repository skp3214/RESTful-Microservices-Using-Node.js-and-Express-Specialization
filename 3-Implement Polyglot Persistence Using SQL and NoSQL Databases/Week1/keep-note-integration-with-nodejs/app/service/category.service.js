const categoryDAO = require('../dao/category.dao');

// Create and save a new category
exports.create = (categoryData, callback) => {
  categoryDAO.create(categoryData, (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, data);
  });
};

// Retrieve all categories
exports.getAll = (name, callback) => {
  categoryDAO.getAll(name, (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, data);
  });
};

// Find a single category by ID
exports.findById = (categoryId, callback) => {
  categoryDAO.findById(categoryId, (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, data);
  });
};

// Update a category identified by ID
exports.updateById = (categoryId, categoryData, callback) => {
  categoryDAO.updateById(categoryId, categoryData, (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, data);
  });
};

// Delete a category by ID
exports.remove = (categoryId, callback) => {
  categoryDAO.remove(categoryId, (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, data);
  });
};

// Delete all categories
exports.removeAll = (callback) => {
  categoryDAO.removeAll((err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, data);
  });
};
