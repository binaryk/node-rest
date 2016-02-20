var controller = require('../Controllers/CatController');
module.exports = function(app, express){
  //app.route is basically a shortcut to call the express.Router()
  app.route('/cat')
      .get(controller.listAll)
      .post(controller.store);
}