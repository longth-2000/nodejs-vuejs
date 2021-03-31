var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoClient = require('mongodb').MongoClient;
var routes = require('./src/nodejs/routes/routes');
app.use(bodyParser.json());
app.use(cors());
//ket noi router
app.use(routes);
app.get('/', (req, res) => {
    mongoClient.connect('mongodb://127.0.0.1:27017/nodedb', function(err, db) {
        if (err) throw err;
        var products = db.collection('users');
        products.find({}).toArray(function (err,data) {
            //nếu lỗi
            if (err) throw err;
            //nếu thành công
            res.send(data)
        });
    });
}) 

var portscanner = require('portscanner');
portscanner.findAPortNotInUse([3000, 3010], '127.0.0.1').then(port => {
    console.log('Port' + port + ' is available!');
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
})
