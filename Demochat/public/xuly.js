var socket = io("http://localhost:3000");

socket.on("server-send-error",function(){
    alert("username da ton tai");
});

socket.on("server-send-success",function(data){
    $("#currentUser").html(data);
    $("#loginForm").hide(2000);
    $("#chatForm").show(1000)

});

socket.on("server-send-listuser",function(data){
    $("#boxContent").html("");
   data.forEach(function(i){ // chefn them 1 phan tu moi
        $("#boxContent").append("<div class='user'>" + i + "</div>");
   });
});

// server send message
socket.on("server-send-message",function(data){
    // doan server tra ve la 1 doan json
    $("#listMessages").append("<div class='sms'>" + data.un + ":" + data.nd + "</div>");
});

// notification typing
socket.on("have-user-is-typping",function(data){
    $("#notification").html("<img src='1.gif'>" + data);
});

socket.on("have-user-stop-typping",function(data){
    $("#notification").html(data);
});

$(document).ready(function(){
    $("#loginForm").show();
    $("#chatForm").hide();

    $("#btnRegister").click(function(){
        socket.emit("client-send-user",$("#textusername").val());
    });

    $("#btnLogout").click(function(){
        socket.emit("logout");
        $("#loginForm").show(1000);
        $("#chatForm").hide(2000);
        // sau khi logout thi an form chat hien thi form login
    });

    $("#btnSendMessage").click(function(){
        socket.emit("user-send-message",$("#textMessage").val());
    });

    // bat su kien khi user typing
    $("#textMessage").focusin(function(){
        socket.emit("have-user-typping");
    });
    // ham focusin and focusout bat su kien nguoi dung co nhap lieu hay k

    $("#textMessage").focusout(function(){
        socket.emit("have-user-disconect-typping");
    });

});

