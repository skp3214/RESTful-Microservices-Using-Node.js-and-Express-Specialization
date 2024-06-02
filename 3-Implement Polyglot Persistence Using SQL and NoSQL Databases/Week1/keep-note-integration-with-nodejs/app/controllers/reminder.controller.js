const reminderService = require("../service/reminder.service.js");

// Call the create method of reminderService object and return the result back
exports.create = (newReminder,callback) => {
  reminderService.create(newReminder,callback);
};

// Call the getAll method of reminderService object and return the result back
exports.findAll = (name,callback) => {
  reminderService.findAll(name,callback);
};

// Call the findById method of reminderService object and return the result back
exports.findOne = (id,callback) => {
  reminderService.findOne(id,callback);
};

// Call the updateById method of reminderService object and return the result back
exports.update = (id,updatedReminder,callback) => {
  reminderService.update(id,updatedReminder,callback);
};

// Call the remove method of reminderService object and return the result back
exports.delete = (id,callback) => {
  reminderService.delete(id,callback);
};

// Call the removeAll method of reminderService object and return the result back
exports.deleteAll = (callback) => {
  reminderService.deleteAll(callback);
};
