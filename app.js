"use strict";
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const home = require('./src/routes/home');

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', home);
app.use('/welcome', home);
module.exports = app;
