const http = require('http');
const fs = require('fs');

let PORT = 8080;

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', (err, data) => {
        if(err){
            throw err;
        }else{
            res.write(data);
            //data to JSON
            //JSON.stringify(data)
            res.end(JSON.stringify(data));
        }
    })
}).listen(PORT, ()=> {
    console.log(`SERVER ON ${PORT}`);
});

server.on('listening', () => {
    console.log('SERVER IS WAITING ON 8080 PORT');
});

server.on('error', (error) => {
    console.log(error);
});