const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const SerialPort = require('serialport');
var five = require("johnny-five");
require('events').EventEmitter.prototype._maxListeners = 0;
var led;
var board = new five.Board();
   board.on("ready", function() {
  		led = new five.Led(12);
});


const app =express();

var pre = [];
app.use(express.json());
app.use('/static',express.static('public'));

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

app.post('/pred', function (req, res) {
	pre = req.body;
   console.log("request "+req.body);
   if(pre[0]=="1")
   		led.on();
   else if(pre[0]=="0")
   		led.off();
	
});




	


app.listen(3000);