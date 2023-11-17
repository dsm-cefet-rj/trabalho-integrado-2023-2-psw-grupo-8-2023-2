const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const compraSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false, //mudar quando tiver rota usuario

    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Produto'
            },
            quantidade: Number,
            preço: Number
        }
    ],
    total: Number,
})

compraSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v; // Isso é opcional, para remover o campo de versão (__v) se estiver presente
    }
});



var Compras = mongoose.model('Compra', compraSchema);
module.exports = Compras;