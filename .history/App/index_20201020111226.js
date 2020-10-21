const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const config = require('./config/db');
const account = require('./routes/account');
const Post = require('./models/post');

const app = express();
const port = 3000;

app.use(passport.initialize())
app.use(passport.session())

require('./config/passport')(passport)

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 1000000 }))

mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
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
    Post.find().then(posts => res.json(posts))
})

app.get('/post/:id', (req, res) => {
    let url = req.url.split('/');

    Post.findById().then(posts => res.json(posts))
})

app.use('/account', account);

