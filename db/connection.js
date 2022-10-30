const mysql = require('mysql2')
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'naswa4ef',
        database: 'election'
    },
    console.log('Connected to election database.')
);

module.exports = db;