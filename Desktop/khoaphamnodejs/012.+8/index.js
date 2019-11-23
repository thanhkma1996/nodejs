
let http = require('http');
const port = 3001;
const server = http.createServer((request,response)=>{
    response.writeHead(200,{
        'Content-Type':'text/html',
        'Trailer':'Content-MD5'
    });

    response.write('this is a responsive for a request !');
    const ipAddress = request.socket.remoteAddress;
    response.write(`you ip address ${ipAddress} \r \n`);
    response.write(`you url ${request.url}`);
    response.addTrailers({'Content-MD5': '737373737213822122'});
    debugger;
    response.end();
}).listen(port);

console.log(`server is running on port: ${port} `)