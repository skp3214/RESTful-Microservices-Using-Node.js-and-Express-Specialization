# Creating RESTful APIs with Express and MySQL

### Keep-Note API Documentation Description

The Keep-Note API provides a comprehensive set of endpoints for managing notes, categories, and reminders within the Keep-Note application. This API is designed to facilitate the creation, retrieval, updating, and deletion of notes, along with their associated categories and reminders, allowing for efficient note management and organization.

### Collection Details

- **URL for Published Documentation:** [Keep-Note Postman Documentation](https://documenter.getpostman.com/view/28435268/2sA3QpAYK9)
- **Collection Name:** Keep-Note
- **Environment:** No Environment
- **SEO Title:** Keep-Note
- **Description:** Comprehensive API for managing notes, categories, and reminders in the Keep-Note application.

This API documentation aims to provide clear and concise information for developers to integrate and use the Keep-Note API effectively.

#### Database Schema

The database schema for the Keep-Note API includes several interconnected tables to store information about notes, categories, and reminders:

1. **Note Table:**
   - `note_id`: A unique identifier for each note (auto-incremented).
   - `note_title`: The title of the note.
   - `note_content`: The content of the note.
   - `note_status`: The current status of the note (e.g., Active, Pending, Completed).
   - `note_creation_date`: The timestamp when the note was created (defaults to the current timestamp).

2. **Category Table:**
   - `category_id`: A unique identifier for each category (auto-incremented).
   - `category_name`: The name of the category.
   - `category_descr`: A description of the category.
   - `category_creation_date`: The timestamp when the category was created (defaults to the current timestamp).

3. **Reminder Table:**
   - `reminder_id`: A unique identifier for each reminder (auto-incremented).
   - `reminder_name`: The name of the reminder.
   - `reminder_descr`: A description of the reminder.
   - `reminder_type`: The type of reminder (e.g., Daily, Weekly, One-time).
   - `reminder_creation_date`: The timestamp when the reminder was created (defaults to the current timestamp).

4. **NoteCategory Table:**
   - `notecategory_id`: A unique identifier for each note-category relationship (auto-incremented).
   - `note_id`: A foreign key referencing the `note_id` in the Note table.
   - `category_id`: A foreign key referencing the `category_id` in the Category table.

5. **NoteReminder Table:**
   - `notereminder_id`: A unique identifier for each note-reminder relationship (auto-incremented).
   - `note_id`: A foreign key referencing the `note_id` in the Note table.
   - `reminder_id`: A foreign key referencing the `reminder_id` in the Reminder table.

#### Data Integrity

The Keep-Note API ensures data integrity through the use of foreign key constraints, which enforce relationships between tables. To maintain referential integrity, foreign keys in the NoteCategory and NoteReminder tables are defined with `ON DELETE CASCADE` and `ON UPDATE CASCADE` options. This means that any changes to the primary key values in the referenced tables will cascade to the related entries, and deleting a note, category, or reminder will also delete the associated relationships.

#### Sample Data

To demonstrate the functionality of the Keep-Note API, sample data is provided:

- **Notes:**
  - "Meeting Notes": Discuss project timeline and milestones. (Status: Active)
  - "Shopping List": Buy milk, bread, eggs, and butter. (Status: Pending)
  - "Workout Plan": Monday: Chest and triceps. Tuesday: Back and biceps. (Status: Completed)

- **Categories:**
  - "Work": Notes related to work and professional tasks.
  - "Personal": Personal notes and reminders.
  - "Fitness": Notes related to fitness and health.

- **Reminders:**
  - "Daily Standup": Reminder for daily standup meeting at 10 AM. (Type: Daily)
  - "Grocery Shopping": Reminder to buy groceries on Saturday. (Type: Weekly)
  - "Doctor Appointment": Reminder for doctor appointment on June 15th. (Type: One-time)

This structured approach allows users to efficiently manage their notes, ensuring that each note is appropriately categorized and accompanied by relevant reminders. The Keep-Note API is designed to be flexible and robust, supporting various use cases for personal and professional note-taking and management.
