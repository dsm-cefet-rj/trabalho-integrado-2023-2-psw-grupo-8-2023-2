const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    nome:{
        type: String,
        required: true,

    },
    senha:{
        type: String,
        required: true,
    },
    admin: {
        type: Boolean,
        default: false
    }
})

usuarioSchema.set('toJSON', {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v; // Isso é opcional, para remover o campo de versão (__v) se estiver presente
    }
  });

var Usuarios = mongoose.model('Usuario',usuarioSchema);
module.exports = Usuarios;