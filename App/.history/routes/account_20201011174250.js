app.get('/account/reg', (req, res, next) => {
    res.send('Registration page')
})

app.get('/account/auth', (req, res, next) => {
    res.send('Login page')
})

app.get('/account/dashboard', (req, res, next) => {
    res.send('Dashboard')
})