// const express = require("express");
const mysql = require("mysql");
require("dotenv").config();
// const app = express();
// const PORT = process.env.PORT || 8080;


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "burgers_db",
    insecureAuth : true
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  module.exports = connection;
  