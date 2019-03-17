import React, { Component } from 'react';
import {anslutMsgInitial,allMsgInitial,newMsgInitial} from './inputSocketKontroll.js';
//
import {ChatRutan} from './chatRutan.js';
//
export class ChatSidan extends Component{
  render(){
    console.log(anslutMsgInitial);
    console.log(allMsgInitial);
    console.log(newMsgInitial);
    return <div>
        <p>Välkomen till chatt</p>
        <div>
          <ChatRutan
            anslutMsg = {anslutMsgInitial}
            allMsg = {allMsgInitial}
            newMsg = {newMsgInitial}
          />
        </div>
        <button>Sluta Chatta</button>
    </div>
  }
}
