var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Usuarios = require('./models/users')

passport.use(new LocalStrategy(Usuarios.authenticate()));
passport.serializeUser(Usuarios.serializeUser());
passport.deserializeUser(Usuarios.deserializeUser());

