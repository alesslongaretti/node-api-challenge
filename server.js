const express = require('express');

const actionRouter = require('./routers/action-router.js');

const projectRouter = require('./routers/project-router.js');

const server = express();

server.use(express.json());

server.use('/api/project', projectRouter);
server.use('/api/action', actionRouter);


server.get('/', (req,res) => {
    res.send(`
    <h2>Welcome to the Action and Project api</h2>`
    )
});



module.exports = server;