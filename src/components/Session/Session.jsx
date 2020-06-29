import React, {Component} from 'react';
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom';

export default class Session extends Component{

    constructor(props){

        super(props)

        this.state = {
            logoutLink: this.compoentRender()
        }
    }
    

    logout(){
        Cookies.remove('session');
        //console.log('im working')
        this.handleState();
        if(!Cookies.remove('session')){
            window.location.reload(false);
        }
    }

    handleState(){
        this.setState({logoutLink: this.compoentRender()});
    }

    compoentRender(){
        return Cookies.get('session') ? <Link to="#" onClick={()=>this.logout()}>Logout</Link> : <div></div>;
    }

    render() {
        const {logoutLink} = this.state;
        return logoutLink;
    }
}