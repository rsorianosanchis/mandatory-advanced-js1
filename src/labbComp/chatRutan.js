import React,{Component} from 'react';
import io from 'socket.io-client';
import {Container} from '../App.js';

/*********************************************/
class RenderMsg extends Component {

  render(){
    return this.props.nyckel!==''?
      <li
        key= {this.props.nyckel}
        style= {{border: '1px solid black',
                padding: 2,
                margin: 1,
                background: 'grey',
                }}
      >
        <h4>{this.props.user}</h4>
        <p>{this.props.children}</p>
      </li>
      :<li
          key= {this.props.nyckel}
          style= {{border: '1px solid black',
                  padding: 2,
                  margin: 1,
                  background: 'green',
                  }}
      >
        <h4>{this.props.user}</h4>
        <p>{this.props.children}</p>
      </li>
  }
}

export class ChatRutan extends Component {
  constructor(props){
    super(props)
    this.state = {
      newM : {},
      allMsg: [],
      senderKey: 0

    };
  }
  //
  componentWillMount(){
    if(this.state.newM.username!==''){
      this.setState({senderKey: this.senderKey+1})
    }
  }
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
    console.log(this.state.newM.username)
    return (
      <Container>
        <h1>Välkommen till rummet </h1>
        <h2>{this.props.anslutMsg}</h2>
        <ul>
          {this.state.allMsg.map((msg)=>{
                return(
                  <RenderMsg nyckel = {msg.id} user = {msg.username}>
                    {msg.content}
                  </RenderMsg>
                )
              }
            )
          }
          this.state.newM.username===''
          ? <RenderMsg
            nyckel = {this.state.senderKey}
            user = {this.state.newM.username}
            >
                {this.state.newM.content}
            </RenderMsg><RenderMsg/>
        :null
        </ul>
      </Container>
    )
  }
}
