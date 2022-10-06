const express = require('express');
const app = express();

// import db 
const db = require('./config/db');

// connect to db
db();

// view pages
app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/Views'));

// middelwares to parse data
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// define routes
app.use('/', require('./routes/url.routes'))

// server
PORT = 8080;
app.listen(PORT, (err) => { 
    if (err) console.log(err);
    else console.log(`server is running on ${PORT} !`)
});
