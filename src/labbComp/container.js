import React,{Component} from 'react';
//
import {LogInSidan} from './logInSidan.js';
import {ChatSidan} from './chatSidan.js';

export class Container extends Component{
  constructor(props){
    super(props)
    this.state = {userLogged: true}
  }
  render(){
    return (
      <div>
        {this.state.userLogged
          ?<ChatSidan/>
          :<LogInSidan/>}
      </div>
    )
  }
}
