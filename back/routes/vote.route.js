const express = require('express');
const app = express();
const voteRoute = express.Router();

// Vote model
let Vote = require('../models/vote');



// Add vote
voteRoute.route('/add-vote').post((req, res, next) => {
    Vote.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
            console.log(data);
        }
    })
});


// Get all products
voteRoute.route('/').get((req, res) => {
  Vote.find((error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})


// Get single Product
voteRoute.route('/read-Service/:id').get((req, res, next) => {
  Vote.findById(req.params.id, (error, data) => {
  if (error) {
    return next(error)
  } else {
    res.json(data)
  }
})
})
// Update Product Satisfait
voteRoute.route('/update-serviceSatisfait/:id').put((req, res, next) => {
  
  Vote.findByIdAndUpdate(req.params.id, { "$inc" : { "voteSatisfait": 1 }}, (error, data) => {
    
    if (error) {
      return next(error);
      console.log(error)
    } else {
      
      res.json(data)
      console.log('Vote successfully updated!')
    }
  })
})

// Update Product Indiferent
voteRoute.route('/update-serviceIndiferent/:id').put((req, res, next) => {
  
  Vote.findByIdAndUpdate(req.params.id, { "$inc" : { "voteIndiferent": 1 }}, (error, data) => {
  
  if (error) {
    return next(error);
    console.log(error)
  } else {
    
    res.json(data)
    console.log('Vote successfully updated!')
  }
})
})
// Update service Indsatisfait
voteRoute.route('/update-serviceInsatisfait/:id').put((req, res, next) => {
  
  Vote.findByIdAndUpdate(req.params.id, { "$inc" : { "voteNonSatisfait": 1 }}, (error, data) => {
  
  if (error) {
    return next(error);
    console.log(error)
  } else {
    
    res.json(data)
    console.log('Vote successfully updated!')
  }
})
})



module.exports = voteRoute;