let Post = require('../models/PostModel');

// Handle index actions
exports.index = function (req, res) {
    Post.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }

        res.json(users);
    });
};
// Handle create contact actions
exports.new = function (req, res) {


    var rec = new Post() ;
    rec.product_name  = req.body.product_name ;
    rec.message = req.body.message ;
// save the contact and check for errors
    rec.save(function (err) {
        if (err)
             res.json(err);
        else
        res.json({
            message: 'New post created!',
            data: rec
        });
    });
};

exports.view = function (req, res) {

Post.find({ 'product_name' : req.params.product_name }, function(err, data){
if(err){
return res.json(err);}
return res.json(data);
})
};

exports.delete = function (req, res) {
    Post.remove({
        rec_id: req.params.id
    }, function (err, events) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'events deleted'
        });
    });
};
