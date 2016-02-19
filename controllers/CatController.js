module.exports = function(){
  return {
    get: function(req, res){
      res.send(_cats);
    }
  }
}