import React, { Component } from 'react';
import {LogInSidan} from './labbComp/logInSidan.js';

/*********************************************/

export class Container extends Component{
  render(){
    return(
      <div style = {{border: '1px solid #5a92dd', margin: 5,padding: 5}}>
        {this.props.children}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <LogInSidan/>
      </div>
    )
  }
}
export default App;
