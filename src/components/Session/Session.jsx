import React, {Component, Fragment} from 'react';
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom';

export default class Session extends Component{

    constructor(props){
        super(props);

        this.state = {
            link: this.getLink()
        }
    }

    componentDidMount(){
        this.checkCookie();
    }

    checkCookie = ()=>{
        setTimeout(()=>{
            //console.log('hello');
            this.setState({link: this.getLink()});
            this.checkCookie();
        }, 500);
    }

    logout = ()=>{
        Cookies.remove('session');
        //window.location.reload();
    }

    getLink = ()=> Cookies.get('session') ? <Link to="/" onClick={this.logout}>Logout</Link> : <Fragment></Fragment>;

    render() {
        return this.state.link;
    }
}