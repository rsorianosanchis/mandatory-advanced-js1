import React, { Component } from 'react';
import {ChatSidan} from './chatSidan.js'
/*********************************************/

export class LogInSidan extends Component{
  constructor(props){
    super(props)
    this.state = {
      nickName: '',
      //nickKorrekt: this.props.initialValue
    }
  }
  //
  kontrollNick = (e)=>{
    //if this.state.nickName .test regel specifikation regex
    // console.log(e.nativeEvent);
    // console.log(this.state.nickName);
    if(this.state.nickName !== ''){
      //this.setState({nickKorrekt: true})
      //console.log('borde nickKorrekt bli i true  :(');
      console.log(this.state);
      
    }else{
      alert('nickname går inte, skriv igen');
    }
  }
  //
  render(){
    return (
      <div>
        <form onSubmit={this.kontrollNick}>
          <p>
            <label htmlFor='nickname'>Skriv Nickname</label>
            <input
              id = 'nickname'
              type ='text'
              size = {15}
              placeholder ='Nickname..'
              pattern ='[a-z,A-Z,0-9, ,-,_]{1,3}'
              value = {this.state.nickName}
              onChange = {(e)=>{this.setState({nickName: e.target.value})}}
              required
            />
          </p>
          <button>Gå In i Chatt</button>
        </form>
        {
        //this.state.nickKorrekt === true
        this.state.nickKorrekt === ''
        ?<ChatSidan/>
        :<p> titta på console,måste ladda/behålla i login igen</p>
        }
      </div>
    )
  }
}
// LogInSidan.defaultProps = {
//   initialValue: false
// }
//
