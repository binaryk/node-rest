var mongoose = require('mongoose');

var CatModel = mongoose.Schema({
  name: String,
  age: Number,
  type: String
});

module.exports = mongoose.model('Cat',CatModel);