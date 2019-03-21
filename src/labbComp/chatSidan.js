import React, { Component } from 'react';
//
import {ChatRutan} from './chatRutan.js';
import {SkrivRutan} from './skrivRutan.js';
//
export class ChatSidan extends Component{
  slutChat = (e)=>{
    e.preventDefault();
    console.log(e.nativeEvent);
  }
    render(){
    return <div>
        <p>Välkomen till chatt</p>
        <div>
          <ChatRutan/>
          <SkrivRutan/>
        </div>
        <button onClick={this.slutChat}>Sluta Chatta</button>
    </div>
  }
}
