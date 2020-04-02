var mongo = require('mongodb');

var AdekNiyi = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

AdekNiyi.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created! by AdekNiyi");
    db.close()
});