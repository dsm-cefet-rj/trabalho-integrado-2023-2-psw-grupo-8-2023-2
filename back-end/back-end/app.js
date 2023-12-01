var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var FileStore = require('session-file-store')(session);
var passport = require('passport');
var authenticate = require('./authenticate');
var config = require('./config');


var indexRouter = require('./routes/index');
var meusProdutosRouter = require('./routes/produtos');
var comprasRouter = require('./routes/compra');
var usuarioRouter = require('./routes/users')
var uploadRouter = require('./routes/imageUpload');


const mongoose = require('mongoose');

const url = config.mongoUrl

const connect = mongoose.connect(url);
connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); })

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser(11111 - 11111 - 11111));




////

app.use(passport.initialize());

app.use('/usuario', usuarioRouter);

////
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/meusProdutos', meusProdutosRouter);


app.use('/imageUpload', uploadRouter);
app.use('/compras', comprasRouter);
////////////






module.exports = app;
