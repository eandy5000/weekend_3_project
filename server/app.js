// https://git.heroku.com/shrieking-mansion-9665.git

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');

app.set("port", process.env.PORT || 8000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

app.use('/', index);

app.listen(app.get("port"), function(){
   console.log("MEOW! " + app.get("port"));
});


