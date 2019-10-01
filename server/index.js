// node.js module for dealing with filepaths
const path = require('path');
// backend server framework
const express = require('express');
// for doing http stuff between front & back end
const bodyParser = require('body-parser');

var db = require('./database');

const ENV = process.env.NODE_ENV;
// port number server will be running on
const PORT = process.env.port || 5000;

// initializing express and register 
// middleware being used
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/cities', require('./api/cities'));

// make express responsive to requests by 
// listening on a port number
app.listen(PORT, () => {
    // callback statement
    console.log(`Server listening on port ${PORT}...`);
});

db.query('SELECT NOW()', (err, res) => {
    if (err.error)
        return console.log(err.error);
    console.log(`PostgreSQL connected: ${res[0].now}.`);
})

module.exports = app;