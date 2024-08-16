"use strict" 

// import express from "express";
const express  = require('express');
const path = require('path');
const connectMongoDB = require('./database/mongoDB');
const bodyparser = require('body-parser');
const todoRoutes = require('./routes/todo')
const moment = require('moment');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
connectMongoDB();

app.set('view engine', 'ejs');

// Static CSS configuration.
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({extended: true}));

app.use('/', todoRoutes); // called once and it works for all routes

module.exports = app;