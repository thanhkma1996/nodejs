var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");


var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

io.on("connection",function(socket){
    console.log("co nguoi ket noi" + socket.id);
    // console.log( socket.adapter.rooms ); // liet ke cac room co tren server

    socket.on("tao-room",function(data){
        socket.join(data);
        // jon trong js dung de tham gia vao 1 room chat nao do
        // Room chi ton tai khi co 1 socket trong th nguoi cuoi cufng roi khoi room thi room se tu dong bij huy
        socket.Phong = data;

        var mang = [];
        for (room in socket.adapter.rooms) {
           mang.push(room);
        }
        io.sockets.emit("server-send-room",mang);
        socket.emit("server-send-room-socket",data);
    });

    socket.on("user-send-message",function(data){
        io.sockets.in(socket.Phong).emit("server-chat",data);
    });
});


app.get("/",function(req,res){
    res.render("trangchu");
});