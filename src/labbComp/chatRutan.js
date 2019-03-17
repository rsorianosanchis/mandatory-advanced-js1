import React,{Component} from 'react';
//
import {ChatSidan} from './chatSidan.js';

export class ChatRutan extends Component {
  constructor(props){
    super(props)
    console.log(this.props.newMsg);
    this.state = {
      newId: this.props.newMsg.id,
      newUsername: this.props.newMsg.username,
      newContent: this.props.newMsg.content
    };
  }
  //const test = this.props.allMsg;

  render(){
    console.log(this.props.anslutMsg);
    console.log(this.props.newMsg);
    console.log(this.props.allMsg);
    //
    return (
      <div>
        <h1>Välkommen till rummet </h1>
        <h2>{this.props.anslutMsg}</h2>
        <ul>
          {this.props.allMsg.map((item)=>{
            return<li key= {item.id}>
              <p><strong>User:</strong>{item.username}</p>
              <p>{item.content}</p>
            </li>
          })}
          <li key={this.state.newId}>
            <h3>{this.state.newUsername}</h3>
            <p>{this.state.newContent}</p>
          </li>
        </ul>
      </div>
    )
  }
}
//
ChatRutan.defaultProps = {
  anslutMsg: 'no connected',
  newMsg: {id: '0000',username: 'Herr Default Noop',content: 'Detta medelandet kommer från ChatRutan.defaultProps,då, man kan mistänka inget medellandet har kommit eller något är fel '},
  allMsg: {id:'xx',username: 'U',content: '####'}
}
