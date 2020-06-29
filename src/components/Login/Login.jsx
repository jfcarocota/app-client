import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import {Link} from 'react-router-dom';
//import jwt from 'jwt-decode';

import axios from 'axios';
import Cookies from 'js-cookie'

import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import SubmitButtom from './SubmitButton';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    checkLogin(){
        /*const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: this.state.email, password: this.state.password})
        };
        fetch('http://localhost:8081/auth', requestOptions)
        .then(response => response.json())
        .then(data => {

            Cookies.set('session', data, {expires: data.exp});
            this.props.history.push('/profile');
        });*/

        
        const {email, password} = this.state;

        axios.post('http://localhost:8081/auth', {email: email, password: password})
            .then(res => {
                Cookies.set('session', res, {expires: res.exp});
                this.props.history.push('/profile');
            });
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    componentDidMount(){
        if(Cookies.get('session')){
            this.props.history.push('/profile');
        }
    }

    render() {

        return (
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={()=>this.checkLogin()}>
                            <EmailInput formContext={this} value="email"/>
                            <PasswordInput formContext={this} value="password"/>
                            <SubmitButtom/>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Don't have an account?<Link to="#">Sign Up</Link>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Link to="#">Forgot your password?</Link>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}