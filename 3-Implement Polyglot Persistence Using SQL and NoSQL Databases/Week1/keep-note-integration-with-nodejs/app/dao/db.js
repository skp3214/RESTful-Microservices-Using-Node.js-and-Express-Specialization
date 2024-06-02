const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

initializeConnection = () => {
  // Create a connection object using createConnection function of mysql module
  var connection = mysql.createConnection({
    host: dbConfig.HOST,
    port:dbConfig.PORT,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  });

  // Connect to the database
  connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });

  return connection;
}

module.exports = initializeConnection;
