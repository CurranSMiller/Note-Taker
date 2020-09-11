// Require Express
var express = require("express");

// Create express server.
var app = express();

// Set port.
var PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
// Point the server to the route files.
require("./routes/apiRoutes")(app);
require("./routes/htmlroutes")(app);

// LISTENER
// Listen on port.
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
