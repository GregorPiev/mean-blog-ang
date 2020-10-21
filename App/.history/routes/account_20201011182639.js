const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.post('/reg', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        login: req.body.login,
        password: req.body.password
    })

})

router.get('/auth', (req, res, next) => {
    res.send('Login page')
})

router.get('/dashboard', (req, res, next) => {
    res.send('Dashboard')
})

module.exports = router;