var Cat = require('../../Models/Cat');


exports.listAll = function(req, res){
  Cat.find({}, function (err, cats) {
    if (err)
      res.json({info: "Error", error: err});
    res.json({info: "Cats found successfully", data: cats})
  });
}

exports.store  = function(req, res){
  var cat = new Cat(req.body);
  cat.save(function(err){
    if(err){
      res.json({info: "Error", error: err});
    }
    res.json({info: "Cat created successfully"});
  })
}