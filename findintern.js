var mongo = require('mongodb');
var assert = require("assert");

var AdekNiyi = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var dbName = "AdekNiyi";

AdekNiyi.connect(url, { useUnifiedTopology: true }, function(err, client) {
    if (err) throw err;
    var db = client.db(dbName);

    db.collection("myMovies").find({}, { projection: { _id: 0, movie: 1 } }).toArray(function(err, res) {
        if (err) throw err;
        client.close();
        console.log(res);
    });
});