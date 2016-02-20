/* Application init */
var express = require('express');
var morgan = require('morgan');
var app = express();

/* MongoDB started */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats');


/* Config files */
require('./config/app')(app)

/* Server start */
var server = app.listen(3000, function(){
  console.log('Server is started on port: 3000');
});


/* Routes definitions */
require('./app/Http/routes')(app, express)
