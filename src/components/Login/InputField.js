import {Component} from 'react';

export default class InputField extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            formContext: props.formContext,
            value: props.value ? props.value : ''
        }
    }

    handleChange(e) {
        const {formContext, value} = this.state;
        formContext.setState({[value]: e.target.value});
    }
}