var mongo = require('mongodb');
var assert = require("assert");

var AdekNiyi = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
var dbName = "AdekNiyi";

AdekNiyi.connect(url, { useUnifiedTopology: true }, function(err, client) {
    if (err) throw err;
    assert.equal(null, err);
    var db = client.db(dbName);
    console.log("switched to " + db.databaseName + " database");
    var myMovies = [
        { movie: "The Banker", year: "2020", rating: 8 },
        { movie: "bad Boys", year: "2020", rating: 7 },
        { movie: "The Hunt", year: "2020", rating: 7 },
        { movie: "Bloodshot", year: "2020", rating: 7.5 },
        { movie: "First Cow", year: "2020", rating: 6.5 },
    ];
    db.collection("myMovies").insertMany(myMovies, function(err, res) {
        if (err) throw err;
        client.close();
        console.log(myMovies);
    });
});