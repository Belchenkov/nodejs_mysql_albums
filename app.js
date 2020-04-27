const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const swig = require('swig');

const index = require('./controllers/index');
const bands = require('./controllers/band');
const users = require('./controllers/user');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views/pages'));

app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Endpoints (Just tried working or no)
app.get('/', index.show);
app.get('/bands', bands.list);
app.get('/band/:id', bands.byId);
app.post('/bands', bands.create);
app.put('/band/:id', bands.update);
app.delete('/band/:id', bands.delete);
app.get('/users', users.list);
app.post('/users', users.create);

module.exports = app;
