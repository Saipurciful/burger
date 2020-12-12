// Set up MySQL connection
const mysql = require("mysql");
require("dotenv").config();
const connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else
{
   connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "burgers_db"
   
});
};

connection.connect();
  
  // Export connection for ORM to use
  module.exports = connection;
  