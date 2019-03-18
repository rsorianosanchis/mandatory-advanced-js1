import React, { Component } from 'react';

export class LogInSidan extends Component{
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
            minLength = {1}
            maxLength = {12}
          />
          <button>Gå In i Chatt</button>
        </form>
    </div>
  )
  }
}
