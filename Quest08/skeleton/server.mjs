import http from 'http';

let PORT = 8080;

const server = http.createServer();

server.on('connection', (socket)=>{
    console.log('NEW CONNECTION');
})


server.listen(PORT, console.log("SERVER IS RUNNING"));
