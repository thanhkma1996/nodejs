var express = require('express');
var app = express();
app.use(express.static("public"));
var multer = require('multer');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });


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

app.get("/video/admin",function(req,res){
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
           res.render("admin",{data:result});
        });
    });
});


app.get("/video/delete/:id",function(req,res){
    pool.connect(function(err,client,done){
        if(err){
            return console.error('eror fetching client from pool',err);
        }
        client.query('delete from video where id =' + req.params.id,function(err,result){
            done();
            if(err){
                res.end();
                return console.error('error running query',err);
            }
           res.redirect("../admin");
        });
    });
});

// add file
var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/upload')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
});

var upload = multer({storage:storage});
app.post('/video/add',upload.single("uploadfile"),function(req,res,err){
    // console.log(req.file);
        pool.connect(function(err,client,done){
            if(err){
                return console.error('eror fetching client from pool',err);
            }
            var sql = "insert into video (id,tieude, mota,key,image) values (7,'"+ req.body.tieude+ "','"+req.body.mota +"','"+ req.body.key +"','"+req.file.originalname+"')";
            client.query(sql,function(err,result){
                done();
                if(err){
                    res.end();
                    return console.error('error running query',err);
                }
               res.redirect("/video/admin");
            });
        });

});

app.get('/video/add',function(req,res){
    res.render('add');
});

// edit video
app.get("/video/edit/:id",function(req,res){
    var id = req.params.id;
    pool.connect(function(err,client,done){
        if(err){
            return console.error("error",err);
        }
        client.query('select * from video where id='+id,function(err,result){
            done();
            if(err){
                res.send(end);
                return console.log('erroe return result',err);
            }
            res.render("edit",{data:result});
        });
    });
});

app.post("/video/eidt/:id",urlencodedParser,function(req,res){
    var id=res.params.id;
        upload(req,res,function(err){
            if(err){
                res.send("xay ra loi trong qua trinh upload");
            }else {
                if(typeof(req.file)=='undefined'){
                    pool.connect(function(err,client,done){
                        if(err){
                            return console.error('eror upload file',err);
                        }
                        client.query("Update video set tieude ='"+req.body.tieude +"',mota = '"+req.body.mota+"',key='"+req.body.key + "' where id =" + id,function(err,result){
                            done();
                            if(err){
                                res.end();
                                return console.error('eror upload file',err);
                            }
                            res.redirect("../admin");
                        });
                    });
                }else {
                    pool.connect(function(err,client,done){
                        if(err){
                            return console.error('eror upload file',err);
                        }
                        client.query("Update video set tieude ='"+req.body.tieude +"',mota = '"+req.body.mota+"',key='"+req.body.key + "',image='"+req.file.originalname+"' where id =" + id,function(err,result){
                            done();
                            if(err){
                                res.end();
                                return console.error('eror upload file',err);
                            }
                            res.redirect("../admin");
                        });
                    });
                }
            }
        });
});