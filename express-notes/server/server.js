// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');


// MongoDB
mongoose.connect('mongodb://localhost/rest');

// Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//CORS
app.use(cors());

// Routes
app.use('/api', require('./routes/api'));

// Start Server
app.listen(3000, function(){
    console.log('CORS-enabled web server listening on port 3000');
});