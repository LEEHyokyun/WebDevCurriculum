function router(req, res, path, query){
    switch(req.method){
        case 'GET':
            get(req, res, path, query);
            break;
        case 'POST':
            post(req, res, path, query);
            break;
        default:
            res.end();
    }
}

function get(req, res, path, query){
    res.statusCode = 404;
    console.log('query is, ', query);
    console.log('query bar is, ', query)
    res.write(`HELLO, ${query}`);
    res.end();
}

function post(req, res, path, query){
    let body = [];
    req
    .on('data', (chunk) => {
        body.push(chunk);
    })
    .on('end', () => {
        body = Buffer.concat(body).toString();
        const jsonData = JSON.parse(body);
        res.write(`Hello, ${JSON.stringify(jsonData)}`);
        res.end();
    })
}

export default router;