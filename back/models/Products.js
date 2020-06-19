const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Product = new Schema({
  product_name: {
    type: String
  },
  reference: {
    type: String
  },
  image: {
    type: String
  },
  voteSatisfait: {
      type:  Number
  }, 
  voteNonSatisfait: {
    type: Number
  },
  voteIndiferent: {
    type: Number
  },
  points: {
      type: String
  }
}, {
  collection: 'product'
})

module.exports = mongoose.model('Product', Product)