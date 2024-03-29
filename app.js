require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
const fs = require("fs")
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var JsonStore = require('express-session-json')(session);

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var memeRouter = require('./routes/memes');
var memedetailRouter = require('./routes/meme')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/bootstrap-icons'));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new JsonStore({ path: 'data', filename: "session.json"})
}));

// Passport middleware setup
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(user, cb) {
  cb(null, user);
});

passport.use(new LocalStrategy(function(username, password, done) {
  let usersArray = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./data/users.json")));
  let filteredArray = usersArray.filter(x => x.username == username);
  if (filteredArray.length > 0) {
    let usersData = filteredArray[0];
    if (usersData.password == password) {
      return done(null, usersData);
    }
  }
  return done(null, false);
}));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/memes', memeRouter);
app.use('/meme', memedetailRouter);

//define user variable for the navbar
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});

//logout router
var logoutRouter = require('./routes/logout');
app.use('/logout', logoutRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
