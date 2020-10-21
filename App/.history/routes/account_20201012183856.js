const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');


router.post('/reg', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        login: req.body.login,
        password: req.body.password
    })
    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'User has not been added' });
        } else {
            res.json({ success: true, msg: 'User has been added' })
        }
    })
})

router.get('/auth', (req, res, next) => {
    res.send('Login page')
})

router.get('/dashboard', passport.authenticate(jwt, { session: false }), (req, res, next) => {
    res.send('Dashboard')
})

module.exports = router;