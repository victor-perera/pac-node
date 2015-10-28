var mongoose = require('mongoose');

var Complaint =  mongoose.model('Complaint', new mongoose.Schema({
    description : String,
    image_src : {
        type : mongoose.SchemaTypes.Url,
        default : ''
    },
    audio_src : {
        type: mongoose.SchemaTypes.Url,
        default : ''
    },
    validated : {
        type: Boolean ,
        default: false
    },
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Comment'
    }]
}));

module.exports = Complaint;