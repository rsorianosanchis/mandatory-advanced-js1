import React, { Component } from 'react';
import {ChatSidan} from './chatSidan.js';
import {Container} from '../App.js';

/*********************************************/

export class LogInSidan extends Component{
  constructor(props){
    super(props)
    this.state = {
      nickName: '',
      nickKorrekt: false,
    }
  }
  //
  kontrollNick = (e)=>{
    this.setState({nickName: e.target.value});
    if(this.state.nickName !== ''){
      this.setState({nickKorrekt: true})
      console.log('borde nickKorrekt bli i true  :(');
      console.log(this.state);
    }else{
      alert('nickname går inte, skriv igen');
    }
  }
  //
  render(){
    return (
      this.state.nickKorrekt === false?
      <Container>
        <form onSubmit={this.kontrollNick}>
          <p>
            <label htmlFor='nickname'>Skriv Nickname</label>
            <input
              id = 'nickname'
              type ='text'
              size = {15}
              placeholder ='Nickname..'
              pattern ='[a-z,A-Z,0-9-_ ]{1,12}'
              onChange = {(e)=>{this.setState({nickName: e.target.value})}              }
              required
            />
          </p>
          <button>Gå In i Chatt</button>
        </form>
      </Container>
      :<ChatSidan
        usrNick= {this.state.nickName}
      ><h1>tar bort , {this.state.nickName}</h1></ChatSidan>
    )
  }
}
