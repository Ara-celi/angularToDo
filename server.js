// Dependencies
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var express = require('express');
var app = express();
var port = 3000;

mongoose.Promise = Promise;

var DbList = require('./models/listModel.js');

// Configure app with body parser
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(__dirname + "/app"));
// Static file support with public folder
//app.use(express.static("public"));

// Database configuration for mongoose
// db: angularToDo
mongoose.connect("mongodb://localhost/angularToDo");
// Hook mongoose connection to db
var db = mongoose.connection;

// Log any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Log a success message when we connect to our mongoDB collection with no issues
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Routes
// ======

// Route to post our form submission to mongoDB via mongoose
app.post("/create", function(req, res) {

  // We use the "DbList" class we defined above to check our req.body against our user model
  var todos = new DbList(req.body);

  // With the new "DbList" object created, we can save our data to mongoose
  // Notice the different syntax. The magic happens in userModel.js
  user.save(function(error, doc) {
    // Send any errors to the browser
    if (error) {
      res.send(error);
    }
    // Otherwise, send the new doc to the browser
    else {
      res.send(doc);
    }
  });
});

app.listen(port, function() {
    console.log("listening on port:" + port);
});