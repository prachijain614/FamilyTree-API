var http = require('http'),
    path = require('path'),
    methods = require('methods'),
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    passport = require('passport'),
    errorhandler = require('errorhandler'),
    mongoose = require('mongoose'),
    compression = require('compression');
var formidable = require('express-formidable');

require('dotenv').config();
require("babel-polyfill");
var auth = require('./server/v1/routes/auth');
var config = require('./server/v1/config');

var isProduction = config.isProduction;
// Create global app object
var app = express();
app.use(cors());
//Enable gzip compression
app.use(compression());
// Normal express config defaults
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(require('method-override')());
app.use(session({
    secret: config.secret,
    cookie: {
        maxAge: config.sessionTimeout,
        secure: false,
        httpOnly: false
    },
    resave: true,
    rolling: true,
    saveUninitialized: true,
}));
app.use(express.static(__dirname + '/build'));
app.use("/public", express.static(__dirname + "/public"));
// app.use(formidable());   // @

if (!isProduction) {
    app.use(errorhandler());
}
if (isProduction) {
    mongoose.connect(config.dbURI);
} else {
    mongoose.connect(config.dbURI);
    mongoose.set('debug', true);
}

if (isProduction) {
    require('./build-server/v1/models');
    require('./build-server/v1/config/passport');
    app.use(require('./build-server/v1/routes'));

} else {
    require('./server/v1/models')
    require('./server/v1/config/passport');
    app.use(require('./server/v1/routes'));
}

app.get('/*', auth.optional, function (req, res) {
    // return res.sendFile(path.join(__dirname, '/build/index.html'));
});
// Error handlers
// Catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// Development error handler
// We will print stacktrace
if (!isProduction) {
    app.use(function (err, req, res, next) {
        console.log('Error Stack', err.stack);
        res.status(err.status || 500);
        res.json({
            'status': false,
            'data': {},
            'msg': err.message
        });
    });
}
// Production error handler
// No stacktraces leaked to user
app.use(function (err, req, res, next) {
    //Send error stack as email
    res.status(err.status || 500);
    res.json({
        'status': false,
        'data': {},
        'msg': err.message
    });
});
// Finally, let's start our server...
var server = app.listen(config.port || 4000, function () {
    console.log('Listening on port ' + server.address().port);
});
