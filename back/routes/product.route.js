const express = require('express');
const app = express();
const productRoute = express.Router();

// Product model
let Product = require('../models/Products');



// Add Product
productRoute.route('/add-product').post((req, res, next) => {
  Product.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
      console.log(data);
    }
  })
});
// Get all products
productRoute.route('/').get((req, res) => {
  Product.find((error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})


// Get single Product
productRoute.route('/read-product/:id').get((req, res, next) => {
    Product.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})



// Update Product Satisfait
productRoute.route('/update-product/:id').put((req, res, next) => {
  
    Product.findByIdAndUpdate(req.params.id, { "$inc" : { "voteSatisfait": 1 }}, (error, data) => {
    
    if (error) {
      return next(error);
      console.log(error)
    } else {
      
      res.json(data)
      console.log('Product successfully updated!')
    }
  })
})

// Update Product Indiferent
productRoute.route('/update-productIndiferent/:id').put((req, res, next) => {
  
  Product.findByIdAndUpdate(req.params.id, { "$inc" : { "voteIndiferent": 1 }}, (error, data) => {
  
  if (error) {
    return next(error);
    console.log(error)
  } else {
    
    res.json(data)
    console.log('Product successfully updated!')
  }
})
})
// Update Product Indsatisfait
productRoute.route('/update-productInsatisfait/:id').put((req, res, next) => {
  
  Product.findByIdAndUpdate(req.params.id, { "$inc" : { "voteNonSatisfait": 1 }}, (error, data) => {
  
  if (error) {
    return next(error);
    console.log(error)
  } else {
    
    res.json(data)
    console.log('Product successfully updated!')
  }
})
})


// Delete student
productRoute.route('/delete-product/:id').delete((req, res, next) => {
    Product.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = productRoute;