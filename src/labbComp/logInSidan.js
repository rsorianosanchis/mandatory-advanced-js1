import React, { Component } from 'react';
import {ChatSidan} from './chatSidan.js';
import {Container} from '../App.js';
/*********************************************/

 class LogInSidan extends Component{
  constructor(props){
    super(props)
    this.state = {
      nickName: '',
      nickKorrekt: false,
      iChatten: false,

    }
  }

  kontrollNick = (e)=>{
    e.preventDefault();

    if(this.state.nickName !== '' ){
      const regex = /^[\s\wÅÄÖåäö-]+$/;
      if (regex.test(this.state.nickName)){
        this.setState({nickKorrekt: true})
      }else{
        alert('nickname går inte, skriv igen');
        this.setState({nickKorrekt: false})
      }
    }else{
      alert('nickname går inte, skriv igen');
      this.setState({nickKorrekt: false})
    }
  }

  // componentWillUnmount() {
  //
  //   this.onSubmit.disconnect();
  // }
  // _iChatten = ()=>{
  //   this.setState({iChatten: true})
  // }
  // _slutaChatten = ()=>{
  //   this.setState({iChatten: false})
  // }



  render() {
    return(
        this.state.nickKorrekt === false  ?
        <Container>
        <form onSubmit={this.kontrollNick}>
          <p>
            <label htmlFor='nickname'>Skriv Nickname</label>
            <input
              id = 'nickname'
              type ='text'
              minLength={1}
              maxLength={12}
              size = {20}
              placeholder ="skriv 1-12 karakter ('_', '-'.)!!"
              onChange = {(e)=>{this.setState({nickName: e.target.value})}              }
              required
            />
          </p>
          <button>Gå In i Chatt</button>
        </form>
      </Container>

      :<ChatSidan
        usrNick= {this.state.nickName}
        slutaChat = {this._slutaChatten}
      />

  );
  }
}

export default LogInSidan;
