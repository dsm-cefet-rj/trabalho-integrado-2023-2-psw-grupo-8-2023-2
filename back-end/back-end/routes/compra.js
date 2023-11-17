var express = require('express');
var router = express.Router();
const cors = require('cors');
const bodyPaser = require('body-parser');
router.use(bodyPaser.json());
router.use(cors());
const Compras = require('../models/compra');


router.route('/')
    .get((req, res, next) => {
        Compras.find({})
            .then((comprasBanco) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(comprasBanco);
            }, (err) => next(err))
            .catch((err) => next(err));

    })

    .post((req, res, next) => {
        const userId = req.body.userId; // Certifique-se de que userId é enviado no corpo da solicitação
        const items = req.body.items; // Certifique-se de que items é enviado no corpo da solicitação
        const totalAmount = req.body.totalAmount; // Certifique-se de que totalAmount é enviado no corpo da solicitação

        // Crie um novo documento de compra usando o modelo do Mongoose
        const novaCompra = new PurchaseModel({
            userId: userId,
            items: items,
            total: totalAmount,
        });

        // Salve a nova compra no banco de dados
        novaCompra.save()
            .then((compra) => {
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                res.json(compra);
            })
            .catch((err) => next(err));
    });


module.exports = router;