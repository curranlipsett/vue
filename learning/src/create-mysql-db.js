var mysql = require('mysql')

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'mysql',
    password : 'admin',
    database : 'express_db'
});

connection.connect(function(err) {
    if (err) {
        throw err;
    }

    console.log("Connected to express_db database");

    connection.query("CREATE DATABASE IF NOT EXISTS express_db", function(err, result) {
        if (err) {
            throw err;
        }
        if (result.changedRows != 0) {
            console.log("Database created" + result);
        }
        else {
            console.log("express_db already created, continuing");
        }
        
    })

    connection.query("CREATE TABLE IF NOT EXISTS users(" +
        "userID INT NOT NULL AUTO_INCREMENT, " + 
        "username varchar(45) NOT NULL, " +
        "password varchar(45) NOT NULL, " +
        "PRIMARY KEY (userID))", function(err, result) {
        if (err) {
            throw err;
        }

        if (result.changedRows != 0) {
            console.log("Table users has been created");
        }
        else {
            console.log("users table already created, continuing");
        }
        
    })

    connection.end();
})