import React, { Component } from 'react';

export class LogInSidan extends Component{
  constructor(){
    super()
    this.state = {nickName: ''}
  }
  submitData = (e)=>{
    console.log(this.state);
    //får user data (nickname) efter submit
    //kanske kan vi anropar rendera chat från här
    const submitData = this.state;
  }
  render(){
    return (
      <div>
        <form onSubmit={this.submitData}>
          <p>
            <label htmlFor='nickname'>Skriv Nickname</label>
            <input
              id = 'nickname'
              type ='text'
              size = {15}
              placeholder ='Nickname..'
              pattern ='[a-zA-Z0-9, ,-,_]{1,12}'
              onChange = {e=>{this.setState({nickName: e.target.value})}}
            />
        </p>
        <button>Gå In i Chatt</button>
        </form>
    </div>
    )
  }
}
