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
    console.log(this.props.usrNick,'hitta debugger');
    return (
      <Container>
        <p>Välkomen till chatt</p>
        <h2>tar bort,props /*this.props.usrNick*/ kommer inte  {this.props.usrNick}</h2>
        <div>
          <ChatRutan/>
          <SkrivRutan
            nicknamn={this.props.usrNick}
          />
        </div>
        <button onClick={this.slutChat}>Sluta Chatta</button>
      </Container>
    )
  }
}
