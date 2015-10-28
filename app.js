var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/* -- MONGOOSE -- */

var mongoose = require("mongoose");

var mongooseTypes = require("mongoose-types");      //Adding 'Email' as a new MongooseType
mongooseTypes.loadTypes(mongoose);

var User = require("./models/User");
var Comment = require("./models/Comment");
var Complaint = require("./models/Complaint");

mongoose.connect('mongodb://localhost/test');

/* -- END-MONGOOSE -- */

var app = express();

/* -- REQUIRE-ROUTERS -- */

var routes = require('./routes/index');
var complaints = require('./routes/complaints');
var login = require('./routes/login');
var join = require('./routes/join');

/* -- END-REQUIRE-ROUTERS -- */

/* -- SETUP-VIEW-ENGINE -- */

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/* -- END-SETUP-VIEW-ENGINE -- */

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));

/* -- SETUP-STATIC-ROUTES -- */

app.use(express.static(path.join(__dirname, 'public')));
app.use('/scripts/angularjs', express.static(__dirname + '/node_modules/angular/'));
app.use('/scripts/jquery', express.static(__dirname + '/node_modules/jquery/'));
app.use('/scripts/lumx', express.static(__dirname + '/node_modules/lumx/core/js'));
app.use('/scripts/moment', express.static(__dirname + '/node_modules/moment/'));
app.use('/scripts/velocity', express.static(__dirname + '/node_modules/velocity/'));

app.use('/css/lumx', express.static(__dirname + '/node_modules/lumx/core/scss'));
app.use('/css/own_style', express.static(__dirname + '/node_modules/lumx/core/scss'));


/* -- END-SETUP-STATIC-ROUTES -- */

/* -- ADDING-ROUTERS-TO-EXPRESS -- */

app.use('/', routes);
app.use('/complaints', complaints);
app.use('/login', login);
app.use('/join', join);

/* -- END-ADDING-ROUTERS-TO-EXPRESS -- */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
