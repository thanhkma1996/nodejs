// cai dat modul npm install express multer de upload file
var express = require("express");
var app = express();
var multer = require('multer');
app.set('view engine','ejs');
app.set('views','./views');
app.listen("3000",function(){
    console.log("connect susscess")
});

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./upload')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
});

var upload = multer({storage:storage});
app.post('/upload',upload.single("file"),function(req,res){
    console.log(req.file);
    res.send("upload file thanh cong");
});

app.get('/',function(req,res){
    res.render('upload');
});