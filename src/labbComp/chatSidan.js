import React, { Component } from 'react';
import {ChatRutan} from './chatRutan.js';
import {SkrivRutan} from './skrivRutan.js';
import {Container} from '../App.js';

/*********************************************/

export class ChatSidan extends Component{
  slutChat = (e)=>{
    e.preventDefault();
    console.log(e.nativeEvent);
    //kör tillbaka till login sidan,hur?,måste jag fundera på lyfecycle
  }
  render(){
    const nickname = this.props.usrNick;
    return (
      <Container>
        <p>Välkomen till chatt</p>
        <div>
          <ChatRutan/>
          <SkrivRutan nickname={nickname}/>
        </div>
        <button onClick={this.slutChat}>Sluta Chatta</button>
      </Container>
    )
  }
}
