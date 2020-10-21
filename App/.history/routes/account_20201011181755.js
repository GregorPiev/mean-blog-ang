const express = require('express');
const router = express.Router();

router.post('/reg', (req, res, next) => {

    res.send('Registration page')
})

router.get('/auth', (req, res, next) => {
    res.send('Login page')
})

router.get('/dashboard', (req, res, next) => {
    res.send('Dashboard')
})

module.exports = router;