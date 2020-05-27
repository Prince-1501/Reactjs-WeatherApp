var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var request  = require('request');

//
// mongoose.connect('mongodb://localhost:27017/Stickman',{ useNewUrlParser: true });
// mongoose.Promise = global.Promise; // to remove the depreciating warning

// const MovieUser = require('./models/user.js');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
  res.send("Hello World");
  console.log('Succesfull Expressjs');
});

app.get('/getWeatherOfNewYork',(req,res)=>{
  request('http://api.weatherstack.com/current?access_key=c0e9bb230462a16873b0175d94c15fe2&query=New York',function(error, response, body){
    if(!error && response.statusCode == 200){
      var parsedBody= JSON.parse(body);
      var temp = parsedBody["current"]["temperature"];
      res.send({temp});
    }
  })
});

app.listen(port,()=>{
  console.log(`server is up on port ${port}`);
});
