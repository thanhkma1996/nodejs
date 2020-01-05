var express = require("express");
var config = require("config");
var bodyParser = require("body-parser");


var app = express();
// body parser 
app.use(bodyParser.json()); // decode dang json sau do cai dat express session npm install express session --save
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views",__dirname + "/apps/views");
app.set("view engine","ejs");

// static folder
app.use("/static",express.static(__dirname + "/public"));

var controllers = require(__dirname + "/apps/controllers");

app.use(controllers);

var host = config.get("server.host");
var port = config.get("server.port");

app.listen(3000,function(){
    console.log("server is starting ",port);
});


// phari cafi dat module config moi goij o app.js duioc npm install config --save