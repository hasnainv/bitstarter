var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var string = fs.readFileSync("index.html");
	console.log(string);
	
	//var buffer = new Buffer();
	string = string.toString('utf-8');
	response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
