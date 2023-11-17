var express = require('express');
var router = express.Router();
const cors = require('cors');
const bodyPaser = require('body-parser');
router.use(bodyPaser.json());
router.use(cors());
const Compras = require('../models/compra');
var authenticate = require('../authenticate');


router.route('/')
    .get(authenticate.verifyUser,(req, res, next) => {
        Compras.find({})
            .then((comprasBanco) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(comprasBanco);
            }, (err) => next(err))
            .catch((err) => next(err));

    })

    .post(authenticate.verifyUser, (req, res, next) => {
        Compras.create(req.body)
            .then((compra) => {
                console.log("Compra criada", compra);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(compra);
            }, (err) => next(err))
            .catch((err) => next(err));

    });


module.exports = router;