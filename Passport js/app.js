var express = require("express");
const bodyParser = require("body-parser");
const Passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const fs = require('fs');


var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);


io.on("connection",function(socket){
        console.log("Co nguoi ket noi" + socket.id);
    });

app.use(bodyParser.urlencoded({extended:true}))
app.get("/",function(req,res){
    res.render("trangchu");
});

app.route('/login').get((req,res)=> res.render('login'))
.post(Passport.authenticate('local',{failureRedirect:'/login'}))

Passport.use(new LocalStrategy(
    (username,password,done)=> {
        fs.readFile('./userDB.json',(err,data)=>{
            const db = JSON.parse(data)
            const userRecord = db.find(user =>user.usr == username)
            id(userRecord && userRecord.pwd == password) {
                return done(null,userRecord)
            }else {
                return done(null,false)
            }
        })
    }
))