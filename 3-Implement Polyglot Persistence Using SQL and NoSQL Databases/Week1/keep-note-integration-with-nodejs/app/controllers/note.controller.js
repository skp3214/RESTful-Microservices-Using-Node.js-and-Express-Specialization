const noteService = require("../service/note.service.js");

// Call the create method of noteService object and return the result back
exports.create = (newNote,results) => {
    noteService.create(newNote, results);
};

// Call the getAll method of noteService object and return the result back
exports.findAll = (title,results) => {
    noteService.getAll(title,results);
};

// Call the findById method of noteService object and return the result back
exports.findOne = (id,results) => {
    noteService.findById(id, results);
};

// Call the updateById method of noteService object and return the result back
exports.update = (id,updatedNote,results) => {
    noteService.updateById(id, updatedNote,results );
};

// Call the remove method of noteService object and return the result back
exports.delete = (id,results) => {
    noteService.remove(id,results);
};

// Call the removeAll method of noteService object and return the result back
exports.deleteAll = (results) => {
    noteService.removeAll(results);
};
