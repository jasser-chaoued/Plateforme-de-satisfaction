const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Vote = new Schema({
  typeDeService: {
    type: String
  },
  Department:{
    type:String
  },
  voteSatisfait: {
    type: Number
  },
  voteNonSatisfait: {
    type: Number
  },
  voteIndiferent: {
    type: Number
  }
}, {
  collection: 'vote'
})

module.exports = mongoose.model('Vote', Vote)