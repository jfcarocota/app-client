import React, {Component, Fragment} from 'react';
//import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import Session from './components/Session/Session';

/* App() {
  return (
    <div className="App">
      <Login/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}*/

//export default App;

export default class App extends Component{

  render() {
    return (
      <Fragment>
        <Session/>
        <Routes/>
      </Fragment>
    );
  }
}