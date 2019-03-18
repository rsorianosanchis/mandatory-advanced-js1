import React,{Component} from 'react';
//
import {LogInSidan} from './logInSidan.js';
import {ChatSidan} from './chatSidan.js';

export class Container extends Component{
  constructor(props){
    super(props)
    // vi ska kontrollera detta state från någon prop som ska komma från förmulär resultat
    this.state = {userLogged: false}
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
