var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);

server.listen(3000);

// routing 
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// usernames which are currently connected to the chat
var usernames = {};

// rooms which are currently available in chat
var rooms = ['room1','room2','room3'];
var room_names = {'room1': 'developers',
                  'room2': 'designers',
                  'room3': 'testers'};

var datas = {
             'room1': [{ 'message': 'Test Mesajı', 'time': '', 'user': 'user 1' }  ],
             'room2': [{ 'message': 'Test Mesajı', 'time': '', 'user': 'user 2' }  ],
             'room3': [{ 'message': 'Test Mesajı', 'time': '', 'user': 'user 3' }  ] 
             }; 

io.sockets.on('connection', function (socket) {
    
    // when the client emits 'adduser', this listens and executes
    socket.on('adduser', function(username){
        if( typeof(username) !== 'undefined' && username !== null){
            console.log(username);
            if( username.trim().length == 0 ){
                username = "anonymous";
            }
            // store the username in the socket session for this client
            socket.username = username;
            // store the room name in the socket session for this client
            socket.room = 'room1';
            // add the client's username to the global list
            usernames[username] = username;
            // send client to room 1
            socket.join('room1');
            // echo to client they've connected
            socket.emit('updatelog', socket.username,   '  have connected to ' + room_names['room1'] );
            // echo to room 1 that a person has connected to their room
            socket.broadcast.to('room1').emit('updatelog', username,  ' has connected to chat');
            
            var messages = datas['room1'];
            socket.emit('updaterooms', rooms, room_names['room1'], messages );
        } 
    });
    
    // when the client emits 'sendchat', this listens and executes
    socket.on('sendchat', function (message, time) {
        
        if( typeof(datas[socket.room]) !== 'undefined' ){
            // we tell the client to execute 'updatechat' with 2 parameters
            var val = {'message': message, 'time': time, 'user': socket.username} 
            
            if( datas[socket.room].length > 15 ){
                datas[socket.room].shift();
            };

            datas[socket.room].push( val );
            io.sockets.in(socket.room).emit('updatechat', socket.username, message);
        }
    });
    
    socket.on('switchRoom', function(newroom){
        socket.leave(socket.room);
        socket.join(newroom);
        socket.emit('updatelog', socket.username, '  have connected to '+ room_names[newroom]);
        // sent message to OLD room
        socket.broadcast.to(socket.room).emit('updatelog',  socket.username, ' has left chat');
        // update socket session room title
        socket.room = newroom;
        socket.broadcast.to(newroom).emit('updatelog',  socket.username, ' has joined chat');
        var messages = datas[newroom];
        socket.emit('updaterooms', rooms, newroom, messages);
    });
    

    // when the user disconnects.. perform this
    socket.on('disconnect', function(){
        // remove the username from global usernames list
        delete usernames[socket.username];
        // update list of users in chat, client-side
        io.sockets.emit('updateusers', usernames);
        // echo globally that this client has left
        socket.broadcast.emit('updatelog',  socket.username, ' has disconnected');
        socket.leave(socket.room);
    });
});

