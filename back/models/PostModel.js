const mongoose = require('mongoose');

const PostModel = mongoose.Schema({
    product_name: {
        type: String
    },
    message: {
        type: String
    }
}

);

//module.exports = mongoose.model('post', PostModel)

var post = module.exports = mongoose.model('post', PostModel);
module.exports.get = function (callback, limit) {
    post.find(callback).limit(limit);
}