const express = require('express');
const app = express();

const path = require('path');

const fs = require('fs');

app.use(express.static(path.join(__dirname, )))

app.get('/', (req, res)=>{
    res.send('THIS IS API SERVER!')
    //res.sendFile(path.join(__dirname, '../', 'index.html'));
    //res.send(data);
});

module.exports = app;