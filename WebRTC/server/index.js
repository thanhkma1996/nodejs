const io = require('socket.io')(3000);

const arrUserInfo = [];



io.on('connection',socket => {
    socket.on('nguoi_dung_dang_ki',user => {
        arrUserInfo.push(user);
        socket.emit('list_online',arrUserInfo);
        io.emit('co_nguoi_dung_moi',user);
    });
});