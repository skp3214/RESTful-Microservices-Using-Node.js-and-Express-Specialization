const connection = require('./db');

// Variable to store connection object to perform CRUD operations using connection module
var sql = connection();

// Constructor to initialize note with note_title, note_content, note_status, note_creation_date, note_id, category_id, and reminder_id as its properties
const Note = function (note) {
  this.note_id = note.note_id;
  this.note_title = note.note_title;
  this.note_content = note.note_content;
  this.note_status = note.note_status;
  this.note_creation_date = note.note_creation_date;
  this.category_id = note.category_id;
  this.reminder_id = note.reminder_id;
};

Note.create = (note, result) => {
  try {
    // Insert into Note table
    let insertNoteQuery = `
      INSERT INTO Note (note_title, note_content, note_status, note_creation_date)
      VALUES (?, ?, ?, ?)
    `;

    // Execute the query
    sql.query(insertNoteQuery, [
      note.note_title,
      note.note_content,
      note.note_status,
      note.note_creation_date
    ], (err, res) => {
      if (err) {
        console.error("Error inserting note:", err);
        return result(err, null);
      }

      // Get the newly generated note_id
      const note_id = res.insertId;

      // Function to handle further insertions with the retrieved note_id
      const handleFurtherInsertions = (categoryId, reminderId) => {
        // Insert into NoteCategory table (if category_id provided)
        if (categoryId) {
          let insertNoteCategoryQuery = `
            INSERT INTO NoteCategory (note_id, category_id) VALUES (?, ?)
          `;
          sql.query(insertNoteCategoryQuery, [note_id, categoryId], (err) => {
            if (err) {
              console.error("Error inserting note category:", err);
            }
          });
        }

        // Insert into NoteReminder table (if reminderId provided)
        if (reminderId) {
          let insertNoteReminderQuery = `
            INSERT INTO NoteReminder (note_id, reminder_id) VALUES (?, ?)
          `;
          sql.query(insertNoteReminderQuery, [note_id, reminderId], (err) => {
            if (err) {
              console.error("Error inserting note reminder:", err);
            }
          });
        }
      };

      // Call the function to handle insertions based on provided data
      handleFurtherInsertions(note.category_id, note.reminder_id);

      // Attach the note_id to the note object before returning the result
      note.note_id = note_id;

      // Return the result with the full note object including note_id
      result(null, note);
    });
  } catch (err) {
    console.error("Error creating note:", err);
    result(err, null);
  }
};




// Find note by ID
Note.findById = (noteId, result) => {
  sql.query(`
    SELECT * 
    FROM Note 
    LEFT JOIN NoteCategory ON Note.note_id = NoteCategory.note_id
    LEFT JOIN NoteReminder ON Note.note_id = NoteReminder.note_id
    WHERE Note.note_id = ?`,
    [noteId],
    (err, res) => {
      if (err) {
        console.error("Error finding note:", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("Found note:", res[0]);
        result(null, res[0]);
        return;
      }
      // Note not found
      result({ message: "Note not found" }, null);
    }
  );
};

// Get all notes or notes by title
Note.getAll = (title, result) => {
  let query = `
    SELECT * 
    FROM Note 
    LEFT JOIN NoteCategory ON Note.note_id = NoteCategory.note_id
    LEFT JOIN NoteReminder ON Note.note_id = NoteReminder.note_id`;

  if (title) {
    query += ` WHERE note_title LIKE ?`;
    title = `%${title}%`;
  }

  sql.query(query, [title], (err, res) => {
    if (err) {
      console.error("Error fetching notes:", err);
      result(err, null);
      return;
    }
    console.log("Fetched notes:", res);
    result(null, res);
  });
};

// Update note by ID
Note.updateById = (noteId, note, result) => {
  // Start a transaction
  sql.beginTransaction((err) => {
    if (err) {
      console.error("Error starting transaction:", err);
      result(err, null);
      return;
    }

    // Update the Note table
    sql.query(
      `UPDATE Note 
       SET note_title = ?, note_content = ?, note_status = ?, note_creation_date = ? 
       WHERE note_id = ?`,
      [note.note_title, note.note_content, note.note_status, note.note_creation_date, noteId],
      (err, res) => {
        if (err) {
          return sql.rollback(() => {
            console.error("Error updating note:", err);
            result(err, null);
          });
        }

        if (res.affectedRows == 0) {
          // Note not found
          return sql.rollback(() => {
            result({ message: "Note not found" }, null);
          });
        }

        // Update the NoteCategory table
        sql.query(
          `UPDATE NoteCategory 
           SET category_id = ? 
           WHERE note_id = ?`,
          [note.category_id, noteId],
          (err, res) => {
            if (err) {
              return sql.rollback(() => {
                console.error("Error updating note category:", err);
                result(err, null);
              });
            }

            // Update the NoteReminder table
            sql.query(
              `UPDATE NoteReminder 
               SET reminder_id = ? 
               WHERE note_id = ?`,
              [note.reminder_id, noteId],
              (err, res) => {
                if (err) {
                  return sql.rollback(() => {
                    console.error("Error updating note reminder:", err);
                    result(err, null);
                  });
                }

                // Commit the transaction
                sql.commit((err) => {
                  if (err) {
                    return sql.rollback(() => {
                      console.error("Error committing transaction:", err);
                      result(err, null);
                    });
                  }

                  console.log("Updated note:", { id: noteId, ...note });
                  result(null, { id: noteId, ...note });
                });
              }
            );
          }
        );
      }
    );
  });
};


// Remove note by ID
Note.remove = (noteId, result) => {
  sql.query("DELETE FROM Note WHERE note_id = ?", [noteId], (err, res) => {
    if (err) {
      console.error("Error deleting note:", err);
      result(err, null);
      return;
    }
    if (res.affectedRows == 0) {
      // Note not found
      result({ message: "Note not found" }, null);
      return;
    }
    console.log("Deleted note with ID:", noteId);
    result(null, res);
  });
};

// Remove all notes
Note.removeAll = (result) => {
  sql.query("DELETE FROM Note", (err, res) => {
    if (err) {
      console.error("Error deleting notes:", err);
      result(err, null);
      return;
    }
    console.log("Deleted all notes");
    result(null, res);
  });
};

module.exports = Note;
