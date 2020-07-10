import React, {Component, Fragment} from 'react';
//import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import Session from './components/Session/Session';
import Container from './components/Container';

export default class App extends Component{


  render() {
    return (
      <Container content={
          <Fragment>
            <Session/>
            <Routes/>
          </Fragment>
      }/>
    );
  }
}