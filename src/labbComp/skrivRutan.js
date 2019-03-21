import React,{Component} from 'react';

export class SkrivRutan extends Component {
  constructor(props){
    super(props)
    this.state = {myMessage: ''}
  }
  submitData = (e)=>{

    console.log(this.state);
    console.log('hej hej test');
    //får message att skicka efter submit
    const submitData = this.state;
  }
  render(){
    return(
      <div>
        <h3>Meddela</h3>
        <form onSubmit={this.submitData}>
          <label>Rutan för meddelande</label>
          <textarea
            id = 'usrMsg'
            type='text'
            cols = {30}
            rows = {10}
            size= {200}
            placeholder='Skriv ditt meddelande här..'
            style = {{border: '1px solid black', }}
            onChange = {e=>this.setState({myMessage: e.target.value})}
          />
          <button>Skicka</button>
        </form>
      </div>
    )
  }
}
