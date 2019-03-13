
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use('/', require('./routes/users'));

var port = process.env.PORT || 8888;

app.listen(port, function() {
	console.log('Our app is running on port', port);
});


module.exports = app;
