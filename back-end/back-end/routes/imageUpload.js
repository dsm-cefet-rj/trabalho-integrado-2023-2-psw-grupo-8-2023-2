const express = require('express');
var router = express.Router();
const multer = require('multer');
const BodyPaser = require('body-parser');
router.use(BodyPaser.json());
const Images = require('../models/image');
const cors = require('./cors');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '../../front-end/src/images')
    },

    filename: (req, file, cb) =>  {
      cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage: storage});

router.route("/").options(cors.corsWithOptions, (req, res) => {res.sendStatus(200);})
.get(cors.corsWithOptions, (req, res, next) => {
    Images.find({}).then((imageBanco) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(imageBanco);
    }, (err) => next(err)).catch((err) => next(err))
})
.post(cors.corsWithOptions, upload.single("image"), async (req, res) => {
    console.log(req.body);
    const imagemNome = '/image/'+ req.file.filename;

    try {
        await Images.create({ image: imagemNome });
        res.json({ status: "ok" });
      } catch (error) {
        res.json({ status: error });
    }
})


module.exports = router;