import React,{Component} from 'react';

export class SkrivRutan extends Component {
  render(){
    return(
      <div>
        <h3>User Field</h3>
        <form>
          <input
            type='text'
            size= {30}
            placeholder='Skriv ditt meddelande här..'

          />
          <button>Skicka</button>
        </form>
      </div>
    )
  }
}
