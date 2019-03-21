import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import utvecklare filer
import {Container} from './labbComp/container.js';
// i atribuute ContainerusrLogged = {true} hur ska jag kontrollera sidan render ?
class App extends Component {
  render() {

    return (

      <Container
        className='App'
      />
    );
  }
}
export default App;
