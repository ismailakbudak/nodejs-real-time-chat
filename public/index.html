<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="/socket.io/socket.io.js"></script>
<script>

    var socket = io.connect('http://localhost:3000');
    var room_names = ['Developers','Designers','Testers'];
    
    // on connection to server, ask for user's name with an anonymous callback
    socket.on('connect', function(){
        // call the server-side function 'adduser' and send one parameter (value of prompt)
        socket.emit('adduser', prompt("What's your name?"));
    });

    // listener, whenever the server emits 'updatechat', this updates the chat body
    socket.on('updatechat', function (username, data) {
        var val = '<div class="chat-widget-right"> <b>'+ username +' : </b>' + data +'  <small style="float:right">'+ time() + '</small></div>' ;

        $('#conversation').append(val );
        $('#conversation').last().focus();
        sound();
    });
    
    // listener, whenever the server emits 'updatechat', this updates the chat body
    socket.on('updatelog', function (username, data) {
        var val = '<li class="media log">' +
                        '<div  class="media-body"> '+ 
                            '<div class="media">' + 
                              '<div class="media-body">' +
                                '<small class="text-muted"> <b>' + username +' </b> '+ data  +'  <small style="float:right">'+ time() + '</small></small>' +
                              '</div>' +
                           '</div>'+
                       '</div>'+
                   '</li>';
        $('#userlogs').append(val );
        $('#userlogs').last().focus();                     
    });

    // listener, whenever the server emits 'updaterooms', this updates the room the client is in
    socket.on('updaterooms', function(rooms, current_room, messages) {
        $('#rooms').empty();
        $.each(rooms, function(key, value) {
            var name = room_names[key];
            if(value == current_room){
                $('#rooms').append('<btn class="btn btn-primary btn-margin">' + name + '</btn>');
            }
            else {
                $('#rooms').append('<btn class="btn btn-info btn-margin" onclick="switchRoom(\''+value+'\')">' + name + '</btn>');
            }
        });
        $.each(messages, function(key, value){
            var val = '<div class="chat-widget-right"> <b>'+ value.user +' : </b>' + value.message +'  <small style="float:right">'+ value.time + '</small></div>' ;
          
            $('#conversation').append(val );
            $('#conversation').last().focus();
        });
    });

    function switchRoom(room){
        socket.emit('switchRoom', room);
        $('#conversation').html("");
    }
    
    var sound = function(){
        var snd = new Audio("http://www.soundjay.com/button/sounds/button-37.mp3"); // buffers automatically when created
        snd.play();
    }; 
    
    var time = function(){
       var d = new Date();
       var da = d.getDate();
       var mo = d.getMonth();
       var h = d.getHours();
       var m = d.getMinutes();
       var s = d.getSeconds();
       var monthNames = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];

       return da + ' ' + monthNames[mo] + ' - '+ h + ':'+ m + ':' + s ;
    };
 
    // on load of page
    $(function(){
   
        // when the client clicks SEND
        $('#datasend').click( function() {
            var message = $('#data').val();
            $('#data').parent().removeClass('has-error');
            
            // tell server to execute 'sendchat' and send along one parameter
            if( jQuery.trim(message) !== '' && jQuery.trim(message).length > 5 && jQuery.trim(message).length < 90 ){
               $('#data').val(''); 
               socket.emit('sendchat', message, time() );
            }else{
                 $('#data').parent().addClass('has-error');
                 $('#data').focus();
            }
        });

        // when the client hits ENTER on their keyboard
        $('#data').keypress(function(e) {
            if(e.which == 13) {
                $(this).blur();
                $('#datasend').focus().click();
            }
        });
    });
</script>

<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <!--[if IE]>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <![endif]-->
    <title>Pamukkale University Chat</title>
    <link href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet">
    <link href="http://themeandphoto.com/taplivedemos/2014/08/18/chat-widget/assets/css/custom.css" rel="stylesheet">
    <style type="text/css">
       .btn-margin{margin: 2px;} 
       .chat-widget-right:after {
            top: 0;
            right: 0;
            border: 0px;
            content: " "; 
            border-width: 0px;
            margin-left: 0px;
        }
        .chat-widget-right {
            width: 100%;
            height: auto;
            padding: 10px;
            margin-top: 4px;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            position: relative;
            border: 1px solid #5AA8CC;
            font-size:12px;
        }
        .log{
            border-bottom: 1px solid rgba(0, 104, 221, 1);
        }
    </style>
    </head>
    <body> 
        <div class="container">
            <div class="row text-center" style="padding-top: 10px;">
                <div class="col-md-12">
                    <h3>Pamukkale University Chat </h3>
                    <div class="col-md-12" id="rooms"></div> 
                </div> 
            </div>
            <div class="container">
                <div class="row " style="padding-top: 10px;">
                    <div class="col-md-9">
                        <div class="panel panel-info" >     
                            <div class="panel-heading">
                                    <h5>15 MESSAGE FROM RECENT CHAT HISTORY</h5>
                            </div>
                            <div class="chat-widget-main">
                                <div id="conversation" class="panel-body">   
                                </div>
                            </div>
                            <div class="panel-footer">
                                <div class="input-group">
                                    <input id="data"  class="form-control" placeholder="Enter Message" type="text">
                                    <span class="input-group-btn ">
                                        <button id="datasend" class="btn btn-info" type="button">SEND</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                   USER LOGS
                            </div>
                            <div class="panel-body  chat-widget-main">
                                <ul id="userlogs" class="media-list">
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js" />
</body>
</html>
