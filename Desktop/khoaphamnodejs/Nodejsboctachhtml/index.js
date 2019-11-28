var express = require('express');
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
app.listen(3000);

var request = require("request");
var cheerio = require("cheerio");

app.get("/",function(req,res){
    request("https://www.24h.com.vn/",function(error,response,body){
        if(error){
            console.log(error);
            res.render("trangchu",{html:"co loi xay ra"});

        }else {
            $ = cheerio.load(body);
            var ds = $(body).find(".lstNml a");
            // ds.each(function(i,e){
            //     // console.log( $(this).text());
            //     console.log(e["attribs"]["href"]); // lay link
            // });
            // console.log(ds);
            // console.log(body);
            // res.render("trangchu",{html:body});
            res.render("trangchu",{html:ds});

        }
    });
   
});