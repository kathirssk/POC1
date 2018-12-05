const express = require('express');
// const bodyParser = require('body-parser');
const http = require('http');
const app = express();
var mongoose = require('mongoose');
const router = express.Router();
require('../model/user.js');
require('../constant/constant.js');
var UserModel=mongoose.model('users');

var model;

router.post(login,(req,res)=>{
    UserModel.findOne({userId:req.body.userId},(err,data)=>{
        if(req.body.password==data.password){
            res.send(data);
        }
       else{
           res.send(err);
       }
    });
});



module.exports =router;