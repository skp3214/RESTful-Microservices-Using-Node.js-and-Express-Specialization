-- Create the schema
CREATE DATABASE IF NOT EXISTS notesdb;
USE notesdb;

-- Create the User table
CREATE TABLE User (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_added_date DATE,
    user_password VARCHAR(255) NOT NULL,
    user_mobile VARCHAR(15)
);

-- Create the Note table
CREATE TABLE Note (
    note_id INT AUTO_INCREMENT PRIMARY KEY,
    note_title VARCHAR(255) NOT NULL,
    note_content TEXT,
    note_status VARCHAR(50),
    note_creation_date DATETIME
);

-- Create the Category table
CREATE TABLE Category (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255) NOT NULL,
    category_descr TEXT,
    category_creation_date DATETIME,
    category_creator INT,
    FOREIGN KEY (category_creator) REFERENCES User(user_id)
);

-- Create the Reminder table
CREATE TABLE Reminder (
    reminder_id INT AUTO_INCREMENT PRIMARY KEY,
    reminder_name VARCHAR(255) NOT NULL,
    reminder_descr TEXT,
    reminder_type VARCHAR(50),
    reminder_creation_date DATETIME,
    reminder_creator INT,
    FOREIGN KEY (reminder_creator) REFERENCES User(user_id)
);

-- Create the NoteCategory table
CREATE TABLE NoteCategory (
    notecategory_id INT AUTO_INCREMENT PRIMARY KEY,
    note_id INT,
    category_id INT,
    FOREIGN KEY (note_id) REFERENCES Note(note_id),
    FOREIGN KEY (category_id) REFERENCES Category(category_id)
);

-- Create the NoteReminder table
CREATE TABLE NoteReminder (
    notereminder_id INT AUTO_INCREMENT PRIMARY KEY,
    note_id INT,
    reminder_id INT,
    FOREIGN KEY (note_id) REFERENCES Note(note_id),
    FOREIGN KEY (reminder_id) REFERENCES Reminder(reminder_id)
);

-- Create the UserNote table
CREATE TABLE UserNote (
    usernote_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    note_id INT,
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (note_id) REFERENCES Note(note_id)
);

-- Insert sample data into User table
INSERT INTO User (user_name, user_added_date, user_password, user_mobile)
VALUES
('Alice', '2024-01-01', 'password123', '1234567890'),
('Bob', '2024-01-02', 'password456', '0987654321');

-- Insert sample data into Note table
INSERT INTO Note (note_title, note_content, note_status, note_creation_date)
VALUES
('First Note', 'This is the content of the first note.', 'active', '2024-01-01 10:00:00'),
('Second Note', 'This is the content of the second note.', 'inactive', '2024-01-02 11:00:00');

-- Insert sample data into Category table
INSERT INTO Category (category_name, category_descr, category_creation_date, category_creator)
VALUES
('Work', 'Notes related to work', '2024-01-01 12:00:00', 1),
('Personal', 'Personal notes', '2024-01-02 13:00:00', 2);

-- Insert sample data into Reminder table
INSERT INTO Reminder (reminder_name, reminder_descr, reminder_type, reminder_creation_date, reminder_creator)
VALUES
('Meeting Reminder', 'Reminder for meeting', 'email', '2024-01-01 14:00:00', 1),
('Birthday Reminder', 'Reminder for birthday', 'notification', '2024-01-02 15:00:00', 2);

-- Insert sample data into NoteCategory table
INSERT INTO NoteCategory (note_id, category_id)
VALUES
(1, 1),
(2, 2);

-- Insert sample data into NoteReminder table
INSERT INTO NoteReminder (note_id, reminder_id)
VALUES
(1, 1),
(2, 2);

-- Insert sample data into UserNote table
INSERT INTO UserNote (user_id, note_id)
VALUES
(1, 1),
(2, 2);

-- Fetch the row from User table based on Id and Password
SELECT * FROM User WHERE user_id = 1 AND user_password = 'password123';

-- Fetch all the rows from Note table based on the field note_creation_date
SELECT * FROM Note WHERE note_creation_date = '2024-01-01 10:00:00';

-- Fetch all the Categories created after the particular Date
SELECT * FROM Category WHERE category_creation_date > '2024-01-01';

-- Fetch all the Note ID from UserNote table for a given User
SELECT note_id FROM UserNote WHERE user_id = 1;

-- Write Update query to modify particular Note for the given note id
UPDATE Note SET note_content = 'Updated content of the first note.' WHERE note_id = 1;

-- Fetch all the Notes from the Note table by a particular User
SELECT n.* FROM Note n
JOIN UserNote un ON n.note_id = un.note_id
WHERE un.user_id = 1;

-- Fetch all the Notes from the Note table for a particular Category
SELECT n.* FROM Note n
JOIN NoteCategory nc ON n.note_id = nc.note_id
WHERE nc.category_id = 1;

-- Fetch all the reminder details for a given note id
SELECT r.* FROM Reminder r
JOIN NoteReminder nr ON r.reminder_id = nr.reminder_id
WHERE nr.note_id = 1;

-- Fetch the reminder details for a given reminder id
SELECT * FROM Reminder WHERE reminder_id = 1;

-- Write a query to create a new Note from particular User (Use Note and UserNote tables - insert statement)
INSERT INTO Note (note_title, note_content, note_status, note_creation_date)
VALUES ('New Note', 'Content of the new note.', 'active', NOW());
INSERT INTO UserNote (user_id, note_id)
VALUES (1, LAST_INSERT_ID());

-- Write a query to create a new Note from particular User to particular Category (Use Note and NoteCategory tables - insert statement)
INSERT INTO Note (note_title, note_content, note_status, note_creation_date)
VALUES ('New Category Note', 'Content of the new category note.', 'active', NOW());
INSERT INTO NoteCategory (note_id, category_id)
VALUES (LAST_INSERT_ID(), 1);

-- Write a query to set a reminder for a particular note (Use Reminder and NoteReminder tables - insert statement)
INSERT INTO NoteReminder (note_id, reminder_id)
VALUES (1, 2);

-- Write a query to delete particular Note added by a User (Note and UserNote tables - delete statement)
DELETE FROM UserNote WHERE user_id = 1 AND note_id = 1;
DELETE FROM Note WHERE note_id = 1;

-- Write a query to delete particular Note from particular Category (Note and NoteCategory tables - delete statement)
DELETE FROM NoteCategory WHERE note_id = 2 AND category_id = 2;
DELETE FROM Note WHERE note_id = 2;
