var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  admin:{
      type: Boolean,
      default: false
  },
  email: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  }
});

User.set('toJSON', {
    transform: (doc, ret) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v; 
    }
  });


User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);