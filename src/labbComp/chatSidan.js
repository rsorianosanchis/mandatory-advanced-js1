import React, { Component } from 'react';
//
import {ChatRutan} from './chatRutan.js';
import {SkrivRutan} from './skrivRutan.js';
//
export class ChatSidan extends Component{
    render(){
    return <div>
        <p>Välkomen till chatt</p>
        <div>
          <ChatRutan/>
          <SkrivRutan/>
        </div>
        <button>Sluta Chatta</button>
    </div>
  }
}
