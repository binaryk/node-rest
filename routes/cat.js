var Cat = require('../models/Cat.js');

module.exports = function(app){
  _cats = [];

  app.get('/cat',  function(req, res){
    Cat.find(function(err, cats){
      if(err){
        res.json({info: "Eroare", error: err});
      }

      res.json({info: "Cats found successfully", data: cats})
    })
  })

  app.post('/cat',  function(req, res){
    console.log(req);
    
    var cat = new Cat(req.body);
    cat.save(function(err){
      if(err){
        res.json({info: "Eroare", error: err});
      }

      res.json({info: "Cat created successfully"});
    })
  })

  app.delete('/cat/:id', function(req, res){
    Cat.findByIdAndRemove(req.params.id, function(err){
      console.log(req.params.id);
      if(err){
        res.json({info: "Err, nu am sters", error: err});
      }

      res.json({info: "Cat removed successfully"});
    })
  })
}