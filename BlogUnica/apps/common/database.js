var config = require("config");
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blog_unica"
  });


  function getConnection(){
        if(!connection) {
            connection.connect();
        }
        return connection.connect();
  }
  module.exports= {
        getConnection: getConnection // export ham getcollection
  }