import http from 'http';
import parser from './utils/parser.js'
import foo from './router/foo.js'
let PORT = 8080;

const server = http.createServer((req, res)=>{
    const path = parser.path(req.url);
    const query = parser.query(req.url);

    switch(path[0]){
        case 'foo':
            console.log(query);
            foo(req, res, path.slice(1, path.length), query);
            break;
        default:
            res.write('HELLO WORLD!');
            res.end();
            break;
    }
});

server.listen(PORT);

console.log(`SERVER IS RUNNING ON ${PORT}`);