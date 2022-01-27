//Simple logging web server in nodejs

var http = require('http');
var fs = require('fs');
var ip = require('ip');
var url = require('url');
var qs = require('querystring');
var message = process.env.TREE || 'Oak';

const PORT = 8080;
const HOST = ip.address();

const options = {
  hostname: HOST,
  port: PORT,
  path: '/tree',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'statusCode': 200
  }
};

 
var server = http.createServer(options, function (req, res) {
    var urlParts = url.parse(req.url, true),
        urlParams = urlParts.query, 
        urlPathname = urlParts.pathname,
        body = null
        req.on('data', function (data) {
        body += data; 
    });
    var remote = req.connection.remoteAddress;
    if(req.url == '/tree'){
      console.log(req.url, 'true')
      body = message
    }else{
      console.log(req.url, 'false')
    }
    req.on('end', function () {
        console.log('Got request from: %s', remote);
        res.end(JSON.stringify({"myFavouriteTree":body} ));
    });
 
});


// //Define behaviour of the server receiving requests
// server.on('request', function(req,resp){
//   // Get the IP address of the client
//   var remote = req.connection.remoteAddress;
//   console.log('Got request from: %s', remote);
  
//   // Prepare and send the rensponse
//   resp.statusCode = 200;
//   resp.setHeader('Content-Type', 'application/json');
//   var body = message;
//   //var html = '<html><head><title>Hello</title></head><body><h1>' + body + '</h1></body></html>\n'; 
//   resp.end(JSON.stringify({ "myFavouriteTree": body }));
// });

//Start the server
server.listen(PORT);
console.log('Server listening on: %s:%s', HOST,PORT);