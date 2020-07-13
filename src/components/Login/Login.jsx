import React, {Component, Fragment} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

import axios from 'axios';
import Cookies from 'js-cookie'

import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import SubmitButtom from './SubmitButton';

import sha256 from 'crypto-js/sha256';

import LoginCard from './LoginCard';
import FormGroup from '../FormGroup';
import SessionContext from '../Session/SessionContext';

export default class Login extends Component{

    state={
        username: '',
        password: ''
    }

    static contextType = SessionContext;

    checkLogin = ()=>{        
        const {username, password} = this.state;

        axios.post('http://localhost:8081/authhash', {message: sha256(`${username}:${password}`).toString()})
            .then(res => {
                Cookies.set('session', res, {expires: res.exp});
                this.props.history.push('/dashboard');
            });
    }

    componentDidMount(){
        if(Cookies.get('session')){
            this.props.history.push('/dashboard');
        }
    }

    componentDidUpdate(){
        if(Cookies.get('session')){
            this.props.history.push('/dashboard');
        }
    }

    render() {

        return (
            <Fragment>
                <h1>Login</h1>
                <LoginCard>
                    <EmailInput parentContext={this} value="username"/>
                    <PasswordInput parentContext={this} value="password"/>
                    <FormGroup>
                        <SubmitButtom onClick={this.checkLogin} value="Enviar"/>
                    </FormGroup>
                </LoginCard>
            </Fragment>
        );
    }
}
