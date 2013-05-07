/*
 * -------------------
 * Module Dependencies
 * -------------------
 */

// Init Express
var express = require('express')
var app     = express();

// Routing Table
var home  = require('./routes')
  , blog  = require('./routes/blog')
  , about = require('./routes/about')
  , http  = require('http')
  , path  = require('path');

// Routes
app.get('/', home.page);
app.get('/blog', blog.page);
app.get('/about', about.page);
//app.get('/blog/:id/:title', blog.page);

// Environments
app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// Development Only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Create Server and Listen on Port
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});