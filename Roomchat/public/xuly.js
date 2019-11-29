
var socket = io("http://localhost:3000");

socket.on("server-send-room",function(data){
    $("#dsroom").html();
    data.map(function(room){
        $("#dsroom").append("<h4 class='room-news'>" + room + "</h4>");
    });
});
// server-send-room

socket.on("server-send-room-socket",function(data){
    $("#roomhientai").html(data);
});

socket.on("server-chat",function(data){
    $("#right").append("<div>" + data + "</div>");
});

$(document).ready(function(){

    $("#btnTaoRoom").click(function(){
        socket.emit("tao-room",$("#textroom").val());
    });

    $("#btnchat").click(function(){
        socket.emit("user-send-message",$("#textmessage").val());
    });

});