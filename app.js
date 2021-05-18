require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var ejs = require('ejs');

const indexRouter = require('./controller/index');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(indexRouter);


// catch 404
app.use(function(req, res) {
    res.render('error', {title: 'Page not found'});
});



app.listen(3000, () => {
  console.log('server is running on port 3000');
});
