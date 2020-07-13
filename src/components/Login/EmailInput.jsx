import React, {Component} from 'react';
import { FaUser } from 'react-icons/fa';
import LoginField from './LoginField';

export default class EmailInput extends Component{

    render() {
        const {parentContext, value} = this.props;
        return (
            <LoginField parentContext={parentContext} type="text" value={value} placeholder="username" icon={<FaUser/>}/>
        );
    }
}