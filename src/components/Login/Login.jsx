import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

import axios from 'axios';
import Cookies from 'js-cookie'

import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import SubmitButtom from './SubmitButton';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    checkLogin = ()=>{        
        const {username, password} = this.state;

        axios.post('http://localhost:8081/auth', {username: username, password: password}, {headers: {hello: 'expuesto'}})
            .then(res => {
                Cookies.set('session', res, {expires: res.exp});
                this.props.history.push('/profile');
            });
    }

    componentDidMount(){
        if(Cookies.get('session')){
            this.props.history.push('/profile');
        }
    }

    componentDidUpdate(){
        if(Cookies.get('session')){
            this.props.history.push('/profile');
        }
    }

    render() {

        return (
            <Fragment>
                <h1>Login</h1>
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-body">
                            <div>
                                <EmailInput formContext={this} value="username"/>
                                <PasswordInput formContext={this} value="password"/>
                            </div>
                            <SubmitButtom onClick={this.checkLogin}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}