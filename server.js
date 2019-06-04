//Dependencies
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 4040;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// arrays and variables for people






app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
