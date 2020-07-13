import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import Session from './components/Session/Session';
import Container from './components/Container';
import {SessioProvider} from './components/Session/SessionContext';

export default class App extends Component{

  render() {
    return (
      <Container>
        <SessioProvider>
          <Session/>
          <Routes/>
        </SessioProvider>
      </Container>
    );
  }
}