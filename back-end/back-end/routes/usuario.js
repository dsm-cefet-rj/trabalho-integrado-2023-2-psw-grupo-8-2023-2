var express = require('express');
var router = express.Router();
const cors = require('cors');
const bodyPaser = require('body-parser');
router.use(bodyPaser.json());
router.use(cors());

const Usuarios = require('../models/usuario');


router.route('/')
    router.post('/signup', (req,res,next) => {
        Usuarios.findOne({email: req.body.email})
        .then((usuario) => {
            if(usuario != null) {
                var err = new Error('User ' + req.body.email + 'já cadastrado!');
                err.status = 403;
                next(err);
            } else {
                return Usuarios.create({
                    nome: req.body.nome,
                    senha: req.body.senha,
                    email: req.body.email});
            }
        })
        .then((usuario) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({status: 'Registro concluido', usuario: usuario});
        }, (err) => next(err))
        .catch((err) => next(err));

        router.post('/login', (req,res,next) => {
            if(!req.session.user) {
                var authHeader = req.headers.authorization;
                if (!authHeader) {
                    var err = new Error ('Você não está autenticado');
                    res.setHeader('WWW-Authenticate', 'Basic');
                    err.status = 401;
                    return next(err);
                }

                var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
                var email = auth[0];
                var password = auth[1];

                Usuarios.findOne({email: email})
                .then((usuario) => {
                    if (usuario === null) {
                        var err = new Error ('Email ' + email + 'não existe!');
                        err.status = 403;
                        return next(err);
                    }
                    else if (usuario.senha !== password) {
                        var err = new Error ('Sua senha está incorreta');
                        err.status = 403;
                        return next(err)
                    }
                    else if (usuario.email === username && user.senha === password) {
                        req.session.user = 'authenticated';
                        res.statusCode = 200;
                        res.setHeader ('Content-Type', 'text/plain')
                        res.end('Você está autenticado')
                    }
                })
                .catch((err) => next(err))
            }
            else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Você já está autenticado');
            }
        })
    })

    router.get('/logout', (req,res) => {
        if(req.session) {
            req.session.destroy();
            req.clearcookie('session-id');
            res.redirect('/');
        } else {
            var err = new Error ('Você não está logado');
            err.status = 403;
            next(err);
        }
    })

module.exports = router;