var server = require('websocket').server;
var http = require('http');

var socket = new server({
  httpServer: http.createServer().listen(8080)
});

socket.on('request', function(request){
  connection = request.accept(null, request.origin);

  connection.on('close', function(connection){
    console.log('Connection Closed');
  });
});

connection.on('message', function(message){
  console.log(message.utf8data);
});

connection.sendUTF(message);
