 
var file_path = "/directory/real-time/index.html";

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(file_path);
});

var messages = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7' , 'test8', 'test9', 'test10', 'test11'];

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
        messages.push(msg);
        messages.shift();
		io.emit('chat message', msg);
	});
    
    socket.on('send data', function(){ 
        io.emit('send data', messages);
    });

});

http.listen(3000, function(){
	console.log('listening on *:3000');
});
