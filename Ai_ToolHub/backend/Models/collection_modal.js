const mongoose = require('mongoose')

const { Schema } = mongoose;

const collectionSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    tools_data : {
        type : [Object],
        required : true
    },
    field : {
        type : String,
        required : true
    },
    keywords : {
        type : [String],
        required : false
    }
});

module.exports = mongoose.model('collection',collectionSchema)