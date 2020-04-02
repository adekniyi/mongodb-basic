var mongo = require('mongodb');
var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


mongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [];
    dbo.collection("interns").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("interns collection created");
        db.close();
    });
});