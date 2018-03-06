var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  io.emit('connection notification', 'A user has connected');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

const port = process.env.PORT || 3000;
http.listen(port, function(){
  console.log('listening on *:' + port);
});
