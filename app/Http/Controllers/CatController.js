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

exports.find = function(req, res){

  Cat.find({name: "Miha"}, function (err, cat) {
    console.log(cat);
  })

  Cat.findById(req.params.cat_id, function (err, cat) {
      if(err){
        res.json({info: "Error during find cat", error: err});
      }
      if(cat){
        res.json({info: "Cat found successfully", data: cat});
      }else{
        res.json({info: "Cat not found"});
      }
  });
}

exports.put = function(req, res){
  Cat.findById(req.params.cat_id, function (err, cat) {
      if(err){
        res.json({info: "Error during find cat", error: err});
      }
      if(cat){
        cat.name = req.body.name,
        cat.age = req.body.age,
        cat.type = req.body.type
        cat.save(function(err){
          if (err){
            console.log("Success");
            res.json({info: "Error updated"});
          }
          else{
            console.log("Success");
            res.json({info: "Success updated", date: cat});
          }
        });
      }else{
        res.json({info: "Cat not found"});
      }
  });
}