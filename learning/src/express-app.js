const express = require('express')
const app = express()
const mysql = require('mysql')

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'mysql',
    password : 'admin',
    database : 'express_db'
});

connection.connect()

app.get('/', function(req, res) {
    res.send("Hello World!");
})

app.get('/user/:id', function(req, res) {
    var sql = "SELECT * FROM users where userID=?";
    var id = req.params.id;
    connection.query(sql, id, function(err) {
        if (err) {
            throw err;
        }
        res.send('User retreived');
    })
})

app.post('/add', function(req, res) {
    var values = [[req.query.username, req.query.password]];
    var sql = 'INSERT INTO users (username, password) VALUES ?';
    connection.query(sql, [values],
        function(err, result) {
            if (err) {
                //throw err;
                switch (err['code']) {
                    case 'ER_DUP_ENTRY':
                        res.send('The user is not unique');
                    default:
                        res.send('An error has occured');
                }
            }
            else {
                res.send('User added to db');
                console.log('Add success');
            }
        }
    );
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})

var outputData = function(req, res, next) {
    console.log(res);
    next();
}

grabFromDatabase = function() {
    connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
        if (err) {
            throw err 
        }
        return rows[0].solution;
    })
};

app.use(outputData);