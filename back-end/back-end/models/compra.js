const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const compraSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, //mudar quando tiver rota usuario

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
        delete ret.__v; 
    }
});



var Compras = mongoose.model('Compra', compraSchema);
module.exports = Compras;