const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');

const app = express();
const port = 3000;
app.listen(port, (req, res, next) => {
    console.log('Server starting on port:' + port)
});

app.get('/', (req, res, next) => {
    res.send('Site home page')
})