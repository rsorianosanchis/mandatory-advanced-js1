let socket = require('socket.io-client')('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000');
socket.emit('message',{
username: "nnnn",
content: "uuuu"
});
