var bodyParser = require('body-parser');
module.exports = function(app) {

  /* Body JSON parser */
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));


  /* Cross origin requests */
  app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Method','GET,PUT,DELETE,POST');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
  });
}