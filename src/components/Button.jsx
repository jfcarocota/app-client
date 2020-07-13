import React, {Component} from 'react';

export default class Button extends Component{

    state = {
        onClick: this.props.onClick ? this.props.onClick : ()=> console.log('click'),
        type: this.props.type ? this.props.type : 'submit',
        value: this.props.value ? this.props.value : 'submit'
    }
    
    render() {
        const {onClick, type, value} = this.state;
        return (
            <div className="form-group">
                <button onClick={onClick} type={type} className="btn float-right login_btn">{value}</button>
            </div>
        );
    }
}