var http = require('http');
var path = require('path');
var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'public/dist')));

app.get('*', function(req, res, next) {
  res.sendFile(__dirname+"/public/dist/index.html");
});

var server = http.createServer(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
    socket.emit('msg', { msg: 'Welcome bro!' });

    socket.on("getSocketId", function(){
      socket.emit("socketid", socket.id);
      console.log('Sended socket id: ' + socket.id);
    });

    socket.on('msg',function(msg){
    	socket.emit('test', { id: 1, value: 'This is node js answering', list: [ { idl: 1, value: 'This is a element from list' } ] });
      console.log('Message: ' + msg.value);
    });

    socket.on('msg2',function(msg){
    	socket.emit('msg', { msg: "you sent : "+msg });
      console.log('Message: ' + msg);
    });

    console.log(`Socket ${socket.id} has connected`);
});

server.listen(4444);
