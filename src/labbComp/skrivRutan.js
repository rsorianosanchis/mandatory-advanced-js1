import React,{Component} from 'react';
import io from 'socket.io-client';
import {Container} from '../App.js';
//

export class SkrivRutan extends Component {
  constructor(props){
    super(props)
    this.state = {nick: this.props.nickname, myMessage: ''}
  }
  //
  submitData = (e)=>{
    console.log(this.state);
    console.log('hej hej test');
    //får message att skicka efter submit
    const submitData = this.state;
  }
  skickaMyMessage = (dataIn)=>{
    this.socket = io('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000');
    this.socket.emit('message',{
    username: {dataIn},
    content: dataIn.myMessage
    });

  }
  //
  render(){
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
