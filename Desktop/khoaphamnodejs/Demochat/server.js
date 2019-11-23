var express = require("express");

var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

var manguser=[""];

io.on("connection",function(socket){
    console.log("co nguoi ket noi :" + socket.id);
    
    socket.on("client-send-user",function(data){
        if(manguser.indexOf(data)>=0) {
            socket.emit("server-send-error");
        }else {
            manguser.push(data);
            socket.Username = data;
            socket.emit("server-send-success",data);
            io.sockets.emit("server-send-listuser",manguser);
        }
    });

    //logout
    socket.on("logout",function(){
        manguser.splice(
            manguser.indexOf(socket.Username),1 // xoa 1 thang khi no muon logout splice dufng de cat 1 phan tu trong mang
        );
        socket.broadcast.emit("server-send-listuser",manguser);
    });

    //message
    socket.on("user-send-message",function(data){
        io.sockets.emit("server-send-message",{
            un:socket.Username,nd:data
        });
    });
    
    // user typping
    socket.on("have-user-typping",function(){
        var s = socket.Username + " is typping";
        io.sockets.emit("have-user-is-typping", s );
    });

     // user disconnect typping
     socket.on("have-user-disconect-typping",function(){
        var s = socket.Username + " stop typping";
        io.sockets.emit("have-user-stop-typping",s );
    });


    // disconnect
    socket.on("disconnect",function(){
        console.log(socket.id + ": ngat ket noi");
    });
}); 


app.get("/",function(req,res){
    res.render("trangchu");
});