import React,{Component} from 'react';

export class SkrivRutan extends Component {
  constructor(props){
    super(props)
  }
  skicka0 = (e)=>{
    console.log(e.nativeEvent);
    alert('hah');
  }
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
        <button onClick={this.skicka}>Skicka</button>
        </form>
      </div>
    )
  }
}
