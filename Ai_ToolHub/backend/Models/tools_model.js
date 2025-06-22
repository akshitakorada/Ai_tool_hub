const mongoose = require('mongoose')

const { Schema } = mongoose;

const ToolSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    developed_by : {
        type : String,
        required : true
    },
    release_date : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    statement : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    link : {
        type : String,
        required : true
    },
    yt_link : {
        type : String,
        required : true
    },
    likes : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('tools',ToolSchema)