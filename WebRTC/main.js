const socket = io('http://localhost:3000');

socket.on('list_online',arrUserInfo => {
    console.log(arrUserInfo);
});

socket.on('co_nguoi_dung_moi',user => {
    console.log(user);
});

function openStream(){
    const config = { audio: false , video: true };
    return navigator.mediaDevices.getUserMedia(config);
}

function playStream(idVideoTag,stream) {
    const video = document.getElementById(idVideoTag);
    video.srcObject = stream;
    video.play();
}
var peer = new Peer({key: 'lwjd5qra8257b9'});
peer.on('open', function(id) {
    $('#mypeer').append(id);
    // sigup
    $('#btnsigup').click( () => {
        const username = $('#textUsername').val();
        socket.emit('nguoi_dung_dang_ki',{ ten: username, peerID: id});
    });
});



// caller
$('#btncall').click(()=>{
    const id = $('#remoteId').val();
    openStream()
    .then(stream => {
        playStream('localStream',stream);
        const call = peer.call(id,stream);
        call.on('stream',remoteStream => playStream('remoteStream',remoteStream));
    });
});

// callee
peer.on('call',call => {
    openStream()
    .then(stream =>{
        call.answer(stream);
        playStream('localStream',stream);
        call.on('stream',remoteStream => playStream('remoteStream',remoteStream));

    });
});


