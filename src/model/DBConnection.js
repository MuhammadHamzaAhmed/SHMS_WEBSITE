const mysql = require('mysql');

let connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Hamza1575',
        database: 'SHMS'
    }
);

function getUser(){
    connection.query("SELECT * FROM ")
}
