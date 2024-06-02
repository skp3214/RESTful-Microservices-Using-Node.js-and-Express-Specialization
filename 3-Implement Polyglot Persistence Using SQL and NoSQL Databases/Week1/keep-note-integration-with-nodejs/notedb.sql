
-- create a schema called `notesdb`

-- Create the tables for Note, Category, Reminder, NoteReminder and NoteCategory

-- Note table fields: note_id, note_title, note_content, note_status, note_creation_date
  
-- Category table fields : category_id, category_name, category_descr, category_creation_date

-- Reminder table fields : reminder_id, reminder_name, reminder_descr, reminder_type, reminder_creation_date

-- NoteCategory table fields : notecategory_id, note_id, category_id

-- NoteReminder table fields : notereminder_id, note_id, reminder_id

-- Execute all the queries in Mysql workbench 


-- Create the schema
CREATE database keepnotesdb;

-- Use the schema
USE keepnotesdb;

-- Create Note table
CREATE TABLE Note (
    note_id INT AUTO_INCREMENT PRIMARY KEY,
    note_title VARCHAR(255) NOT NULL,
    note_content TEXT NOT NULL,
    note_status VARCHAR(50) NOT NULL,
    note_creation_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create Category table
CREATE TABLE Category (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL,
    category_descr TEXT,
    category_creation_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create Reminder table
CREATE TABLE Reminder (
    reminder_id INT AUTO_INCREMENT PRIMARY KEY,
    reminder_name VARCHAR(255) NOT NULL,
    reminder_descr TEXT,
    reminder_type VARCHAR(50) NOT NULL,
    reminder_creation_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create NoteCategory table
CREATE TABLE NoteCategory (
    notecategory_id INT AUTO_INCREMENT PRIMARY KEY,
    note_id INT,
    category_id INT,
    FOREIGN KEY (note_id) REFERENCES Note(note_id),
    FOREIGN KEY (category_id) REFERENCES Category(category_id)
);

-- Create NoteReminder table
CREATE TABLE NoteReminder (
    notereminder_id INT AUTO_INCREMENT PRIMARY KEY,
    note_id INT,
    reminder_id INT,
    FOREIGN KEY (note_id) REFERENCES Note(note_id),
    FOREIGN KEY (reminder_id) REFERENCES Reminder(reminder_id)
);



-- Insert data into Note table
INSERT INTO Note (note_title, note_content, note_status) VALUES
('Meeting Notes', 'Discuss project timeline and milestones.', 'Active'),
('Shopping List', 'Buy milk, bread, eggs, and butter.', 'Pending'),
('Workout Plan', 'Monday: Chest and triceps. Tuesday: Back and biceps.', 'Completed');

-- Insert data into Category table
INSERT INTO Category (category_name, category_descr) VALUES
('Work', 'Notes related to work and professional tasks.'),
('Personal', 'Personal notes and reminders.'),
('Fitness', 'Notes related to fitness and health.');

-- Insert data into Reminder table
INSERT INTO Reminder (reminder_name, reminder_descr, reminder_type) VALUES
('Daily Standup', 'Reminder for daily standup meeting at 10 AM.', 'Daily'),
('Grocery Shopping', 'Reminder to buy groceries on Saturday.', 'Weekly'),
('Doctor Appointment', 'Reminder for doctor appointment on June 15th.', 'One-time');

-- Insert data into NoteCategory table
INSERT INTO NoteCategory (note_id, category_id) VALUES
(1, 1),
(2, 2),
(3, 3);

-- Insert data into NoteReminder table
INSERT INTO NoteReminder (note_id, reminder_id) VALUES
(1, 1),
(2, 2),
(3, 3);



// execute below code other wise you will not able to delete and update 
-- Drop existing foreign key constraints

ALTER TABLE NoteCategory
DROP FOREIGN KEY fk_notecategory_note_id,
DROP FOREIGN KEY fk_notecategory_category_id;

ALTER TABLE NoteReminder
DROP FOREIGN KEY fk_notereminder_note_id,
DROP FOREIGN KEY fk_notereminder_reminder_id;

-- Add new foreign key constraints with CASCADE options

ALTER TABLE NoteCategory
ADD CONSTRAINT fk_notecategory_note_id FOREIGN KEY (note_id) REFERENCES Note(note_id) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT fk_notecategory_category_id FOREIGN KEY (category_id) REFERENCES Category(category_id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE NoteReminder
ADD CONSTRAINT fk_notereminder_note_id FOREIGN KEY (note_id) REFERENCES Note(note_id) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT fk_notereminder_reminder_id FOREIGN KEY (reminder_id) REFERENCES Reminder(reminder_id) ON DELETE CASCADE ON UPDATE CASCADE;

