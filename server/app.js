// https://git.heroku.com/shrieking-mansion-9665.git

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var serverArray = require('../modules/serverToClient');

var index = require('./routes/index');

app.set("port", process.env.PORT || 8000);

app.get('/toServer', function(req,res){
   response.send(serverArray);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

app.use('/', index);

app.listen(app.get("port"), function(){
   console.log("MEOW! " + app.get("port"));
});


