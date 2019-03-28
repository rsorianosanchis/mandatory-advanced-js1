import React, { Component } from 'react';
import {ChatRutan} from './chatRutan.js';
import {SkrivRutan} from './skrivRutan.js';
import {Container} from '../App.js';

/*********************************************/

export class ChatSidan extends Component{
  constructor(props){
    super(props)
    this.state ={nickTransfer: this.props.usrNick}
  }
  slutChat = (e)=>{
    e.preventDefault();
    console.log(e.nativeEvent);

    //pending att göra
  }
  render(){
    return (
      <Container>
        <p>Välkomen till chatt</p>
        <h2>  {this.state.nickTransfer}</h2>
        <div>
          <ChatRutan/>
          <SkrivRutan
            nicknamn={this.state.nickTransfer}
          />
        </div>
        <button onClick={this.props.slutaChat}>Sluta Chatta</button>
      </Container>
    )
  }
}
