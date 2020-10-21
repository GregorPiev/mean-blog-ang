const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const config = require('./config/db');

const app = express();
const port = 3000;

mongoose.connect(config.db)
mongoose.connection.on('connected', () => {
    console.log('Successful connection to the database')
})
mongoose.connection.on('error', (err) => {
    console.log('Not successful connection to the database:' + err)
})

app.listen(port, (req, res, next) => {
    console.log('The server was running on the port:' + port)
});

app.get('/', (req, res, next) => {
    res.send('Home page')
})