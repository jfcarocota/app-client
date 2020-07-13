import React, {Component} from 'react';
import IconField from './IconField';
import InputField from './InputField';
import InputGroup from './InputGroup';

export default class LoginField extends Component{

    render() {
        const {placeholder, value, parentContext, icon, type} = this.props;
        return (
            <InputGroup>
                <IconField icon={icon}/>
                <InputField 
                    type={type} 
                    placeholder={placeholder} 
                    value={value}
                    parentContext={parentContext}/>
            </InputGroup>
        );
    }
}