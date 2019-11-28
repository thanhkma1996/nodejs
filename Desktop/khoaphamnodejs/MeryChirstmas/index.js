var express = require('express');
var app = express();
app.use(express.static("public"));
var multer = require('multer');
app.set('view engine','ejs');
app.set('views','./views');

app.listen("3000",function(){
    console.log("Connect success");
});

var pg = require('pg');
var config = {
    user:'postgres',
    database:'mussic',
    password:'Thanhkma1996',
    host:'localhost',
    port:5432,
    max:10,
    idleTimeoutMillis:30000,
};

var pool = new pg.Pool(config);

app.get("/",function(req,res){
    pool.connect(function(err,client,done){
        if(err){
            return console.error('eror fetching client from pool',err);
        }
        client.query('select * from video',function(err,result){
            done();
            if(err){
                res.end();
                return console.error('error running query',err);
            } 
           res.render("trangchu",{data:result});
        });
    });
})
