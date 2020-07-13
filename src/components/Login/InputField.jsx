import React, {Component} from 'react';

export default class InputField extends Component{
    
    state = {
        parentContext: this.props.parentContext,
        value: this.props.value ? this.props.value : '',
        type: this.props.type? this.props.type : 'text',
        placeholder: this.props.placeholder? this.props.placeholder : ''
    }

    handleChange = e=> {
        const {parentContext, value} = this.state;
        parentContext.setState({[value]: e.target.value});
    }

    render() {
        const {type, placeholder} = this.state;
        return (
            <input type={type} className="form-control" placeholder={placeholder} 
            onChange={this.handleChange}/>
        );
    }
}