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

app.listen(3000);
