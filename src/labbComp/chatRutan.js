import React,{Component} from 'react';
import io from 'socket.io-client';
import {Container} from '../App.js';
import Emoji from 'react-emojione';
import Linkify from 'react-linkify';


/*********************************************/

export class ChatRutan extends Component {
  constructor(props){
    super(props)
    this.state = {
      newM : {},
      allMsg: []
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
      this.setState({ newM: newMsg });
      this.state.allMsg.push(newMsg);
    });
  }
  //
  componentWillUnmount() {
    this.socket.disconnect();
  }
  //
  render(){
    return (
      <Container>
        <h1>Välkommen till rummet </h1>
        <h2>{this.props.anslutMsg}</h2>
        <ul>
          {this.state.allMsg.map((msg)=>{
                return(
                  <li
                    key= {msg.id}
                    style= {{border: '1px solid black',
                            padding: 2,
                            margin: 1,
                            background: 'grey',
                            }}
                  >
                    <h4>{msg.username}</h4>
                    <p><Linkify><Emoji>{msg.content}</Emoji></Linkify></p>
                  </li>
                )
              }
            )
          }
          {
            this.state.newM.id !== undefined?
            <li
              key= {this.state.newM.id}
              style= {{border: '1px solid black',
                      padding: 2,
                      margin: 1,
                      background: 'grey',
                      }}
            >
              <h4>{this.state.newM.username}</h4>
              <p><Linkify><Emoji>{this.state.newM.content}</Emoji></Linkify></p>
            </li>
            :null
          }
        </ul>
      </Container>
    )
  }
}
