// Node Dependencies
var express = require('express');
var app     = express();

app.use(express.logger());

// Basic Helo World Test
/*
app.get('/', function(request, response) {
  response.send('Hello World!');
});
*/

// Serve Static Files
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

// Add Port And Listen
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
