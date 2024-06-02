const connection = require('./db');

// Initialize the SQL connection
const sql = connection();

// Define the Reminder constructor
function Reminder(reminder_name, reminder_description, reminder_creation_date) {
  this.reminder_name = reminder_name;
  this.reminder_description = reminder_description;
  this.reminder_creation_date = reminder_creation_date;
}

// Create a new reminder
Reminder.create = (newReminder, result) => {
  sql.query("INSERT INTO reminder SET ?", newReminder, (err, res) => {
    if (err) {
      console.error("Error creating reminder:", err);
      result(err, null);
      return;
    }
    console.log("Created reminder:", { id: res.insertId, ...newReminder });
    result(null, { id: res.insertId, ...newReminder });
  });
};

// Find reminder by ID
Reminder.findById = (reminderId, result) => {
  sql.query("SELECT * FROM reminder WHERE reminder_id = ?", reminderId, (err, res) => {
    if (err) {
      console.error("Error finding reminder:", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("Found reminder:", res[0]);
      result(null, res[0]);
      return;
    }
    // Reminder not found
    result({ message: "Reminder not found" }, null);
  });
};

// Get all reminders or reminders by name
Reminder.getAll = (name, result) => {
  let query = "SELECT * FROM reminder";
  if (name) {
    query += ` WHERE reminder_name LIKE '%${name}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.error("Error fetching reminders:", err);
      result(err, null);
      return;
    }
    console.log("Fetched reminders:", res);
    result(null, res);
  });
};

// Update reminder by ID
Reminder.updateById = (reminderId, reminder, result) => {
  sql.query(
    "UPDATE reminder SET reminder_name = ?, reminder_descr = ?, reminder_creation_date = ? WHERE reminder_id = ?",
    [reminder.reminder_name, reminder.reminder_description, reminder.reminder_creation_date, reminderId],
    (err, res) => {
      if (err) {
        console.error("Error updating reminder:", err);
        result(err, null);
        return;
      }
      if (res.affectedRows == 0) {
        // Reminder not found
        result({ message: "Reminder not found" }, null);
        return;
      }
      console.log("Updated reminder:", { id: reminderId, ...reminder });
      result(null, { id: reminderId, ...reminder });
    }
  );
};

// Remove reminder by ID
Reminder.remove = (reminderId, result) => {
  sql.query("DELETE FROM reminder WHERE reminder_id = ?", reminderId, (err, res) => {
    if (err) {
      console.error("Error deleting reminder:", err);
      result(err, null);
      return;
    }
    if (res.affectedRows == 0) {
      // Reminder not found
      result({ message: "Reminder not found" }, null);
      return;
    }
    console.log("Deleted reminder with ID:", reminderId);
    result(null, res);
  });
};

// Remove all reminders
Reminder.removeAll = (result) => {
  sql.query("DELETE FROM reminder", (err, res) => {
    if (err) {
      console.error("Error deleting reminders:", err);
      result(err, null);
      return;
    }
    console.log("Deleted all reminders");
    result(null, res);
  });
};

module.exports = Reminder;
