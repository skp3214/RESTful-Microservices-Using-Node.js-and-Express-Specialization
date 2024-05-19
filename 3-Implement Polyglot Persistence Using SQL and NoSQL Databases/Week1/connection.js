const mysql = require('mysql');
const dbConfig=require('./db.config');
const connection = mysql.createConnection({
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    database: dbConfig.database,
    password: dbConfig.password
});

connection.connect(function (err) {
    if (err) {
        console.error('Error occurred while connecting:', err.stack);
        return;
    }
    console.log('Connection created with MySQL successfully');
});


module.exports=connection;