import React,{Component} from 'react';
//
import {ChatSidan} from './chatSidan.js';

export class ChatRutan extends Component {
  constructor(props){
    super(props)
    console.log(this.props.newMsg);
    this.state = {
      id: this.props.newMsg.id,
      username: this.props.newMsg.username,
      content: this.props.newMsg.content
    };
  }
  //const test = this.props.allMsg;

  render(){
    function historiskMsg (arr){
      for (let ele of arr) {
        console.log({ele});
        return(
          <li key= {ele.id}>
            <p><strong>User:</strong>{ele.username}</p>
            <p>{ele.content}</p>
          </li>
        )
      }
    };
    return (
      <div>
        <h1>Välkommen till rummet </h1>
        <h2>{this.props.anslutMsg}</h2>
        <ul>
          {historiskMsg(this.props.allMsg)}
          <li key={this.state.id}>
            <h3>{this.state.username}</h3>
            <p>{this.state.content}</p>
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
