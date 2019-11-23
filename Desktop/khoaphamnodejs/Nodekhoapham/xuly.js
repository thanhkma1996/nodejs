var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
    // res.writeHead(200,{"Content-Type":"text/html"});
    // var data = fs.readFileSync(__dirname + "/index.html","utf-8");
    // data = data.replace("{NAME}","THANHKMA")
    // res.end(data);
    // TAO WEBSERVER PIPE
    fs.createReadStream(__dirname + "/index.html").pipe(res);
    // taoj json
    res.writeHead(200,{"Content-Type":"application/json"});
    var obj = {
        ho : "thanh",
        name : "nguyen",
        namsinh : 1996
    };
    res.end(JSON.stringify(obj));
}).listen(3001);