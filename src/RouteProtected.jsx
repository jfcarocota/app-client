import React, {Component, Fragment} from 'react';
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import SessionContext from './components/Session/SessionContext';

class RouteProtected extends Component {

    static contextType = SessionContext;


    componentDidMount(){
        if(!Cookies.get('session')){
            this.props.history.push('/');
        }else{
            //mandar update a session jsx
            this.context.showLink();
        }
    }

    render() {
        return (
            <Fragment>{this.props.children}</Fragment>
        );
    }
}

export default withRouter(RouteProtected);