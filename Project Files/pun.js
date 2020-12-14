const express = require('express');
const path = require('path');
var cors = require('cors');



var bodyParser = require('body-parser')

const app =express();
app.use(cors());

app.use(express.json());
app.use('/static',express.static('public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'/index.html'));
});

app.get('/ui.js',function(req,res){
	res.sendFile(path.join(__dirname,'/ui.js'));
});

app.get('/controller_dataset.js',function(req,res){
	res.sendFile(path.join(__dirname,'/controller_dataset.js'));
});
app.get('/index.js',function(req,res){
	res.sendFile(path.join(__dirname,'/index.js'));
});

app.get('/webcam.js',function(req,res){
	res.sendFile(path.join(__dirname,'/webcam.js'));
});

app.post('/pred', function (req, res,next) {
   console.log("request "+req.body);
   console.log("res"+res);
});

app.listen(3000);