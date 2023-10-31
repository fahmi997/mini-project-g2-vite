const mysql = require("mysql2");

db = mysql.createPool({
    host: "localhost",    // Ganti dengan alamat host MySQL 
    user: "myusername",  // Ganti dengan username MySQL 
    password: "mypassword",  // Ganti dengan password MySQL 
    database: "mydatabase",  // Ganti dengan nama database MySQL 
    port : 3306,
});

module.exports = { db };