const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produtoSchema = new Schema({
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

    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, //mudar quando tiver rota usuario

    },
})

produtoSchema.set('toJSON', {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v; 
    }
  });



var Produtos = mongoose.model('Produto',produtoSchema);
module.exports = Produtos;