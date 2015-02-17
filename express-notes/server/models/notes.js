// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var notesSchema = new mongoose.Schema({
    id: Number,
    position: Object,
    title: String,
    description: String
});

// return model
module.exports = restful.model('Notes', notesSchema);