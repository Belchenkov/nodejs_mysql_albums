const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const swig = require('swig');

// Inject index controller
const indexRouter = require('./controllers/index');
// Inject band controller
// const bands = require('./controllers/band');
// Inject user controller
const usersRouter = require('./controllers/user');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views/pages'));

const swig = new swig.Swig();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
