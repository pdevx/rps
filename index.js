var express = require('express');
var router = express.Router();
var http = require('http');
var https = require('https');
var app = express();
var bodyParser = require('body-parser');

// body-parser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

app.use('/angular', express.static(__dirname + '/angular/app/.www/'));

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/angular', function (req, res) {
  res.sendFile('index.html', { root: __dirname + '/angular/app/.www/' });
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});