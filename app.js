require('dotenv').config();

var express = require('express');
var flash = require('connect-flash');
var passport = require('passport');
var request = require('request');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

const expressSession = require('express-session');
const port = process.env.PORT || 3000
var app = express();

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/public', express.static(__dirname + '/public'));
app.use(flash());
app.use(session({secret: 'keyboard cat'}))
app.use(bodyParser());

app.set('view engine', 'pug');
app.set('view options', { layout: false });
require('./lib/routes.js')(app);
require('./lib/passport.js');


app.listen(port, () => console.log('Example app listening on port %s!', port))
