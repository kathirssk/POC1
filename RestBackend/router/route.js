const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
var mongoose = require('mongoose');
const ObjectID = require('mongodb').ObjectID;
var userSessionController = require('../controller/user-session-controller.js');
var authController = require('../controller/login-controller.js');
 require('../constant/constant.js');
// Connect

mongoose.Promise=global.Promise;
console.log(mongoUrl);
mongoose.connect(mongoUrl).then(()=>
console.log("con"))
.catch(err=>console.log(err));

app.use("/authcontroller",authController);
app.use("/usersessioncontroller",userSessionController);

module.exports = app;