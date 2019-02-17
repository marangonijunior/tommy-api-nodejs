var express = require('express');
var db = require('./config/db');

var app = express();
const Cors = require("cors");

app.use(Cors({ origin: '*' }));

//user route module
var usersRouter = require('./modules/users/users.routes');
app.use('/users', usersRouter);

module.exports = app;
