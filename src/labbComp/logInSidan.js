import React, { Component } from 'react';

export class LogInSidan extends Component{
  constructor(props){
    super(props)
  }
  //
  goIn = (e)=>{
    e.preventDefault();
    const nick = document.getElementById('nickname').value;
    //kontrollera nick validation, regex...
    //tillåt rendera chatsidan och tar bort login sidan
    console.log({nick});
  }
  //
  render(){
    return (
      <div>
        <form>
          <label htmlFor='nickname'>Skriv Nickname</label>
          <input
            id = 'nickname'
            type='text'
            size= {15}
            placeholder='Nickname..'
            pattern='[a-zA-Z0-9, ,-,_]{1,12}'
            minLength = {1}
            maxLength = {12}

          />
        <button onClick={this.goIn}>Gå In i Chatt</button>
        </form>
    </div>
    )
  }
}
