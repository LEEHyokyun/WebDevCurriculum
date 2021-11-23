//express modules
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static('./static/'));

app.set('port', process.env.PORT || PORT);

app.get('/', (req, res) => {
    res.render('main.html');
})

//app.use - middleware
app.use('/index/:id', (req, res) => {
    const userName = req.params.id;
    res.render('index.html')
})

//app.listen(PORT, console.log(`SERVER RUNNING ON ${PORT}`));

app.listen(PORT, ()=>{
    console.log(`SERVER RUNNING ON ${PORT}`)
})


//graphQL modules
const {GraphQLServer} = require('graphql-yoga');
const resolvers = require('./graphql/resolvers.js');

const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
})

server.start(()=>console.log("GRAPHQL SERVER RUNNING ON 4000"));





