// Dependecies
var express = require('express');
var router = express.Router();

//Model
var Note = require('../models/notes');


//Routers
Note.methods(['get','put','post','delete']);
Note.register(router, '/notes');


// Return router
module.exports = router;