const express = require('express');
const path = require('path');

const app = express();

app.set('views', __dirname + '/views/pages');
app.use(express.static(path.join(__dirname, 'public')))
app.use( express.static( "public" ) );
app.set('view engine', 'ejs');
 
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.get('/loading', (req, res) => {
    res.render('loading')
})

app.get('/login-help', (req, res) => {
    res.render('loginhelp')
})

app.get('/otp', (req, res) => {
    res.render('otp')
})

app.get('/reset-password', (req, res) => {
    res.render('setpassword')
})
app.listen(3000);
