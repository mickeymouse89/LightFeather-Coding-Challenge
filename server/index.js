var express = require('express');
var cors = require('cors');
var bodyParser = require("body-parser");
const supervisors = require('./api/supervisors');
const submit = require('./api/submit');
var app = express();
const corsOptions= require('./config/cors')


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  })); 

app.get('/api/supervisors', supervisors);
app.post('/api/submit', submit);

app.listen(4000,function(){
    console.log('server started')
})