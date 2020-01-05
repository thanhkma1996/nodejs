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
});



// caller
$('#btncall').click(()=>{
    const id = $('#emoveId').val();
    openStream()
    .then(stream => {
        playStream('localStream',stream);
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

