import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
//import Cookies from 'js-cookie'


export default class Routes extends Component{

    render() {
        return (
        <Switch>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/" component={Login}/>
        </Switch>
        );
    }
}