var express = require('express');
var router = express.Router();

var ReclamationController = require('../controllers/PostController');
let PostModel = require('../models/PostModel');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/new').post(ReclamationController.new);

router.route('/all').get(ReclamationController.index);


router.route('/find/:product_name')
    .get(ReclamationController.view)

router.route('/delete/:post_id')
    .delete(ReclamationController.delete);



module.exports = router;
