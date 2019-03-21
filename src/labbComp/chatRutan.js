import React,{Component} from 'react';
import io from 'socket.io-client';
import {Container} from '../App.js';

/*********************************************/

export class ChatRutan extends Component {
  constructor(props){
    super(props)
    this.state = {
      newMsg : {},
      allMsg: [],
    };
  }
  //
  componentDidMount(){
    this.socket = io('http://ec2-13-53-66-202.eu-north-1.compute.amazonaws.com:3000');
    this.socket.on('messages', (messages) => {
      console.log(messages);
      this.setState({ allMsg: messages });
    });
    this.socket.on('new_message', (newMsg) => {
      console.log(newMsg);
      this.setState({ newMsg: newMsg });
      this.state.allMsg.push(newMsg);
    });
  }
  //
  componentWillUnmount() {
    this.socket.disconnect();
  }
  //
  render(){
    console.log(this.state.newMsg.username)
    return (
      <Container>
        <h1>Välkommen till rummet </h1>
        <h2>{this.props.anslutMsg}</h2>
        <ul>
          {this.state.allMsg.map((msg)=>{
              return(
                <li key= {msg.id}>
                  <p><strong>User:</strong>{msg.username}</p>
                  <p>{msg.content}</p>
                </li>)
              }
            )
          }
          {this.state.newMsg.id
            ?<li key= {this.state.newMsg.id}>
              <p><strong>User:</strong>{this.state.newMsg.username}</p>
              <p>{this.state.newMsg.content}</p>
              </li>
            :<p></p>}
        </ul>
      </Container>
    )
  }
}
