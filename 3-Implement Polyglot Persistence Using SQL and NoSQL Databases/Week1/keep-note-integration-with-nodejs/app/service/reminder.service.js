const reminderDAO = require('../dao/reminder.dao');

// Create and save a new reminder
exports.create = (reminderData, callback) => {
  reminderDAO.create(reminderData,callback);
};

// Retrieve all reminders
exports.findAll = (name,callback) => {
  reminderDAO.getAll(name,callback);
};

// Find a single reminder by ID
exports.findOne = (reminderId, callback) => {
  reminderDAO.findById(reminderId, callback);
};

// Update a reminder identified by ID
exports.update = (reminderId, reminderData, callback) => {
  reminderDAO.updateById(reminderId, reminderData, callback);
};

// Delete a reminder by ID
exports.delete = (reminderId, callback) => {
  reminderDAO.remove(reminderId, callback);
};

// Delete all reminders
exports.deleteAll = (callback) => {
  reminderDAO.removeAll(callback);
};
