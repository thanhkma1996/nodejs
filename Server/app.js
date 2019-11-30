var express = require("express");

var app = express();
app.use(express.static("./public"));
app.set("view engine","ejs");
app.set("views","./views");
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3001);

io.on("connection",function(socket){
    console.log("co nguoi ket noi :" + socket.id);
    // disconnect
    socket.on("disconnect",function(){
        console.log(socket.id + ": ngat ket noi");
    });

// khi client click thi server lap tuc hien thi data client gui len
    socket.on("Client-send-data",function(data){
        console.log(socket.id +  "vua gui :" + data);
        // io.sockets.emit("Server-send-data",data + "server send"); // server se tra thong tin tren toan client
        // socket.emit("Server-send-data",data + "hello"); // chi thang nao gui thi server gui lai thong tin
        socket.broadcast.emit("Server-send-data",data + "hello")
        // kieu broadcast co nghia thang A phat di du lieu thi thang B , C se nhan duoc
    
    
    });
    

}); 

// lang nghe su kien


app.get("/",function(req,res){
    res.render("trangchu");
});