const mongoose = require('mongoose');

const Schema = mongoose.Schema;

module.exports = mongoose.model('user', new Schema({
  uuid: {
  type: 'String'
  
},
username: {
  type: 'String'

},
email: {
  type: 'String'
  
}
}));