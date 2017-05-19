var express = require("express");
var app = express();
//setting up express app

var MongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId;
var db;
MongoClient.connect("mongodb://localhost", function(err, database){
  if(err){
    return console.log(err);
  }
  db = database;
  app.listen(8080, function(){
  console.log("Server started!");
  });
});
//setting up Mongo database

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Corresponding get request in app.js____________

app.get('/articles', function(req, res) {
  db.collection("articles").find({}).toArray(function(err, data) {
    res.send(data)
  })
});

app.post('/linked', function(req, res) {
  var id = req.body.id
  console.log(id)
  db.collection("linkedArticles").findOne({ _id: ObjectId(id) }, function(err, data) {
    console.log(data)
    res.send(data)
  })
});
//_______________________________________________

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.use(express.static("public"));

app.use(function(req, res, next) {
  res.status(404);
  res.send("404 Error - File Not Found");
});

app.use(function(err, req, res, next) {
  console.log(err);
  res.status(500);
  res.send("500 Error - Server Error");
});
