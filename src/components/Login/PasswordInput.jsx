import React, {Component} from 'react';
import { FaLock } from 'react-icons/fa';
import LoginField from './LoginField';

export default class PasswordInput extends Component{

    render() {
        const {parentContext, value} = this.props;
        return (
            <LoginField parentContext={parentContext} type="password" value={value} placeholder="password" icon={<FaLock/>}/>
        );
    }
}