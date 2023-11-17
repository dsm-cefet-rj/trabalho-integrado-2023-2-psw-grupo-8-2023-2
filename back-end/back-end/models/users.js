var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  admin:{
      type: Boolean,
      default: false
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