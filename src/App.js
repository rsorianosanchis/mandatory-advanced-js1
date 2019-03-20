import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import utvecklare filer
import {bool} from './labbComp/logInSidan.js'
import {Container} from './labbComp/container.js';
// i atribuute ContainerusrLogged = {true} hur ska jag kontrollera sidan render ?
class App extends Component {
  render() {

    return (
      {bool}?<Container/>:
      <Container
        className='App'
        usrLogged
      />
    );
  }
}
export default App;
