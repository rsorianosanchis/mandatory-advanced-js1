import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import utvecklare filer
import {LogInSidan} from './labbComp/logInSidan.js';
//
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
      <Container className='App'>
        <LogInSidan/>
      </Container>
    )
  }
}
export default App;
