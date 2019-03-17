//
//
// var socket = require('socket.io-client')('http://localhost');
// socket.on('connect', function(){});
// socket.on('event', function(data){});
// socket.on('disconnect', function(){});

const socket = require('socket.io-client')('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000');
// socket.on('connect', function(){});
// socket.on('event', function(data){});
// socket.on('disconnect', function(){});
socket.on('new_message', function(message){
    console.log(message);
    let vcontent = message.content;
    console.log(vcontent);
});
socket.on('connect', function(){
  console.log('you are connected');

});
socket.on('messages', function(data){
  console.log(data);

});
