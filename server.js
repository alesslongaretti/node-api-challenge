const express = require('express');

const actionRouter = require('./data/helpers/action-router.js');

const projectRouter = require('./data/helpers/project-router.js');

const app = express();

app.use(express.json());

app.use('/api/action', actionRouter);
app.use('api/project', projectRouter);

app.get('/', (req,res) => {
    res.send(`
    <h2>Welcome to the Action and Project api</h2>`
    )
});

module.exports = app;