var express = require('express');
var app     = express();

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});


app.listen(1337);
console.log('Listening on port 1337');


var tools = require('./tools');
console.log(typeof tools.foo); // => 'function'
console.log(typeof tools.bar); // => 'function'
console.log(typeof tools.zemba); // => undefined