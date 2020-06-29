import {Component} from 'react';
import Cookies from 'js-cookie'

export default class RouteProtected extends Component {

    componentDidMount(){
        if(!Cookies.get('session')){
            this.props.history.push('/');
        }
    }
}