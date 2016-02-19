var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cats');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Method','GET,PUT,DELETE,POST');
  res.header('Access-Control-Allow-Headers','Content-Type');
  next();
});


app.get('/', function(req, res){
  res.send('Hello World!');
});

var server = app.listen(3001, function(){
  console.log('server start 3000');
});

require('./routes/cat')(app)
