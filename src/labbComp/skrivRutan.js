import React,{Component} from 'react';

export class SkrivRutan extends Component {
  constructor(props){
    super(props)
  }
  skicka = (e) =>{
    e.preventDefault();
    const usrMessage = document.getElementById('usrMsg').value;
    //kontrollera message validation
    //skicka till socket
    console.log({usrMessage});

  }
  render(){
    return(
      <div>
        <h3>User Field</h3>
        <form>
          <textarea
            id = 'usrMsg'
            type='text'
            cols = '20'
            rows = '2'
            size= {30}
            placeholder='Skriv ditt meddelande här..'
            style = {{border: '1px solid black', }}
          />
        <button onClick={this.skicka}>Skicka</button>
        </form>
      </div>
    )
  }
}
