const express = require('express');
const router = express.Router();

router.get('/reg', (req, res, next) => {
    res.send('Registration page')
})

router.get('/auth', (req, res, next) => {
    res.send('Login page')
})

router.get('/dashboard', (req, res, next) => {
    res.send('Dashboard')
})