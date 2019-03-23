import React,{Component} from 'react';
import io from 'socket.io-client';
import {Container} from '../App.js';

/*********************************************/

export class SkrivRutan extends Component {
  constructor(props){
    super(props)
    this.state = {
      myMessage: ''
    }
  }
  //
  submitData = (e)=>{
    console.log(this.state);
    //debugger;
    //får message att skicka efter submit
    this.socket = io('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000');
    console.log(this.props.nicknamn,this.state.myMessage);
    this.socket.emit('message',{
    username: this.props.nicknamn,
    content: this.state.myMessage
    });
    console.log('send');
  }
  //
  render(){
    console.log(this.props.nicknamn,'hitta debugger2');
    return(
      <Container>
        <h3>Meddela</h3>
        <form onSubmit={this.submitData}>
          <label>Rutan för meddelande</label>
          <textarea
            id = 'usrMsg'
            type='text'
            cols = {30}
            rows = {10}
            size= {200}
            placeholder='Skriv ditt meddelande här..'
            style = {{border: '1px solid black', }}
            onChange = {e=>this.setState({myMessage: e.target.value})}
          />
          <button>Skicka</button>
        </form>
      </Container>
    )
  }
}
