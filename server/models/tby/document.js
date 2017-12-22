var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var docSchema = new Schema({
  name: String,
  sex: Number,
  job: String,
  school: String,
  company: String,
  emotion: Number,
  ill: String,
  hobby: String,
  warning: String,
  note: String,
  create_dt: Date,
  delete_flg: Boolean,
  collect: Boolean
});

module.exports = mongoose.model('Document', docSchema);