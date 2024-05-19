# Implement Ployglot Persistence Using SQL and NoSQL Database.

## Week 1: All About SQL Database Using MySQL.
Code for making connection.
```js
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    database: 'k21bp',
    password: '@Sachin3214mysql'
});

connection.connect(function (err) {
    if (err) {
        console.error('Error occurred while connecting:', err.stack);
        return;
    }
    console.log('Connection created with MySQL successfully');
});

 ```
 If Error Occurred during making connection then run below code. It will be fine after that.

      ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '@Sachin3214mysql';
      FLUSH PRIVILEGES;

`@Sachin3214mysql` is the password. You have to replace it with your password.
## Week 2: All About NoSQL Database Using MongoDB.
