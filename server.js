//Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// var app = path();
var app = express();
var PORT = process.env.PORT || 4040;

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("app/public"));
// arrays and variables for people

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
