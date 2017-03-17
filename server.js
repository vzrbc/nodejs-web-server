/**************************************************
Steps to try out:
- install Node.js
- download this file to a local folder
- open a command prompt
- cd [the local folder containing this file]
- node server.js
- start a browser and go to http://localhost:3000
**************************************************/

var http = require('http');

//var server = http.createServer(function(request, response){
//    var date = new Date();
//    var dateString = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
//    response.writeHead(200, {'Content-Type': 'text/html'});
//    response.end(
//	  '<h2>Hello, this is the web server created by Node.js!</h2>' +
//	  '<i>The date is (dd-mm-yyyy): ' + dateString + '<br />' +
//	  'The requested URL is: ' + request.url + '</i>');
//});
//server.listen(3000);

http.createServer(function(request, response){
    var date = new Date();
    var dateString = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(
	  '<h2>Hello, this is the web server created by Node.js!</h2>' +
	  '<i>The date is (dd-mm-yyyy): ' + dateString + '<br />' +
	  'The requested URL is: ' + request.url + '</i>');
}).listen(3000);

console.log('Server started at port 3000 ...');