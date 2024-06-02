const categoryService = require("../service/category.service.js");

// Call the create method of categoryService object and return the result back
exports.create = (newCategory,results) => {
  categoryService.create(newCategory, results);
};

// Call the getAll method of categoryService object and return the result back
exports.findAll = (name,results) => {
  categoryService.getAll(name,results);
};

// Call the findById method of categoryService object and return the result back
exports.findOne = (id,results) => {
  categoryService.findById(id,results);
};

// Call the updateById method of categoryService object and return the result back
exports.update = (id,updatedCategory,results) => {
  categoryService.updateById(id,updatedCategory,results);
};

// Call the remove method of categoryService object and return the result back
exports.delete = (id,results) => {
  categoryService.remove(id,results);
};

// Call the removeAll method of categoryService object and return the result back
exports.deleteAll = (results) => {
  categoryService.removeAll(results);
};
