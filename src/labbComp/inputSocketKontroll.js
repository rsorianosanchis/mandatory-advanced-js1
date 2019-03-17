
let socket = require('socket.io-client')('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000');
//
let arrMessages = [];
let newMessage;
let stringAnslut;

socket.on('connect', function(msg){
  console.log(msg);
  stringAnslut = 'Du är anslut i chat rummet'
  console.log(stringAnslut);
});
//
socket.on('messages', function(msg){
  console.log(typeof(msg));
  for (let ele of msg) {
    arrMessages.push(ele);
  }
  console.log(arrMessages);
});
//
socket.on('new_message', function(msg){
    console.log('bugg');
    newMessage = msg;
    console.log(typeof(newMessage));
});


export const anslutMsgInitial = stringAnslut;
export const allMsgInitial = arrMessages;
export const newMsgInitial = newMessage;
