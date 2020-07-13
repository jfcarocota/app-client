import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const SessionContext = React.createContext();

export class SessioConsumer extends Component{

    render() {
        return (
             <SessionContext.Consumer>
                 {this.props.children}
             </SessionContext.Consumer>
        );
    }
}

export class SessioProvider extends Component{

    hideLink = ()=> this.setState({
        link: <Fragment></Fragment>
    })

    logout = ()=>{
        Cookies.remove('session');
        this.hideLink();
    } 
    

    logoutLink = <Link to="/" onClick={this.logout}>Logout</Link>;
    
    state = {
        link: <Fragment></Fragment>,
        hello: 'hello'
    }

    render() {
        return (
            <SessionContext.Provider value={{
                state: this.state,
                showLink: ()=> this.setState({
                    link: this.logoutLink
                })
            }}>
                {this.props.children}
            </SessionContext.Provider>
        );
    }
}

export default SessionContext;