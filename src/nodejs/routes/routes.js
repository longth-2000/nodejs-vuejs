var express = require('express')
var router = express.Router()
var mongoClient = require('mongodb').MongoClient;

router.post("/register", function (req, res) {
    var dataform = req.body;
  mongoClient.connect('mongodb://127.0.0.1:27017/nodedb', function (err, db) {
    if (err) throw err;
    //use product collection
    var products = db.collection('users');
    var data = {
      email: dataform.email,
      password: dataform.password
    }
    products.insertOne(data, function (err, res) {
      //neu xay ra loi
      if (err) throw err;
      //neu khong co loi
      console.log('Them thanh cong');
    });

  });  
});
module.exports = router