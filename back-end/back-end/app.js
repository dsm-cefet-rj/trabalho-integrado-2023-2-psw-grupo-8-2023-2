var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var FileStore = require('session-file-store')(session);
var passport = require('passport');
var authenticate = require('./authenticate');



var indexRouter = require('./routes/index');
var meusProdutosRouter = require('./routes/produtos');
var comprasRouter = require('./routes/compra');
var usuarioRouter = require('./routes/users')

var app = express();

const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/pragmapm'
const connect = mongoose.connect(url);
connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); })


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser(11111 - 11111 - 11111));


//////////////

app.use(session({
    name: 'session-id',
    secret: '11111-11111',
    saveUninitialized: false,
    resave: false,
    store: new FileStore()
}));

////

app.use(passport.initialize());
app.use(passport.session());
app.use('/usuario', usuarioRouter);

////

function auth(req, res, next) {
    console.log(req.session);
    
    if(!req.user) {
        var err = new Error ('Você não está autenticado!');
        err.status = 403;
        return next (err);
    } else {
        next();
    }
}


app.use('/', indexRouter);
app.use('/meusProdutos', meusProdutosRouter);


app.use(auth);
app.use('/compras', comprasRouter);
////////////
app.use(express.static(path.join(__dirname, 'public')));





module.exports = app;
