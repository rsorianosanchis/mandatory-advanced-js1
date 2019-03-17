
let socket = require('socket.io-client')('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000');
//
let arrMessages = [];
let arrNewMessage = [];
let stringAnslut = '';

socket.on('connect', function(){
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
  for (let ele of msg) {
    console.log(ele);
    console.log('bugg');
    arrNewMessage.push(ele);
    console.log(ele);
  }
  console.log(arrNewMessage);
});


export const anslutMsgInitial = stringAnslut;
export const allMsgInitial = arrMessages;
export const newMsgInitial = arrNewMessage;
