const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produtoSchema = new Schema({
    id:{
        type: Number,
        required: true,
    },
    tipo:{
        type: String,
        required: true,

    },
    nome:{
        type: String,
        required: true,

    },
    preço:{
        type: Number,
        required: true,

    },
    img:{
        type: String,
        required: true,

    },
    desc:{
        type: String,
        required: true,

    },
    tamanho:{
        type: Number,
        required: true,

    }
})

module.exports = produtoSchema;