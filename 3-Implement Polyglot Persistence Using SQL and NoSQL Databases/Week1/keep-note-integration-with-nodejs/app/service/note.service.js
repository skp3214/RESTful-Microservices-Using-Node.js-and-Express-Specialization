const noteDAO = require('../dao/note.dao.js');

// Create and Save a new Note
exports.create = (note, result) => {
    noteDAO.create(note, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    });
};

// Retrieve all notes
exports.getAll = (title, result) => {
    noteDAO.getAll(title, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    });
};

// Find a single Note by Id
exports.findById = (id, result) => {
    noteDAO.findById(id, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    });
};

// Update a Note identified by the id
exports.updateById = (id, note, result) => {
    noteDAO.updateById(id, note, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    });
};

// Delete a Note with the specified id
exports.remove = (id, result) => {
    noteDAO.remove(id, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    });
};

// Delete all Notes
exports.removeAll = (result) => {
    noteDAO.removeAll((err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    });
};
