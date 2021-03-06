var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const olympiansController = require('./app/controllers/olympiansController')

app.get("/api/v1/olympians", olympiansController.index)
app.get("/api/v1/olympian_stats", olympiansController.stats)
app.get("/api/v1/events", olympiansController.events)
app.get("/api/v1/events/:id/medalists", olympiansController.eventMedals)

module.exports = app;