var mongoose = require('mongoose');

var Comment =  mongoose.model('Comment', new mongoose.Schema({
    content : String,
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    createdOn: Date
}));

module.exports = Comment;
