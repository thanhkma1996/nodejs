var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.set("view engine","ejs");
app.set("views","./views");

app.listen(3000);




app.get("/hello",function(req,res){
    res.render("trangchu",{hoten:"thanhkma"});
});

app.get("/namsinh",function(req,res){
    res.render("namsinh",{namsinh:[ 1998,1992,1993 ] });
});

// username ,password 
app.post("/hello",urlencodedParser,function(req,res){
    var u = req.body.username;
    var p = req.body.password;
    res.send("username" + u + "password" + p);
});

app.get("/tintuc/:id",function(req,res){
    var i = req.params.id;
    res.send("server nhan duoc id =" + i);
});

// lay du lieu khach hang truyen len xu dung body parser