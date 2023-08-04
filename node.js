//var http = require("http");
//http.createServer().listen(8080);
//http.createServer(function (request, response) {...}).listen(8080);

// Require http header
var http = require('http');

// Create server
http.createServer(function (req, res) {

	// HTTP Status: 200 : OK
	// Content Type: text/html
	res.writeHead(200, {'Content-Type': 'text/html'});
	
	// Send the response body as "Hello World!"
	res.end('Hello World!');

}).listen(8080);
