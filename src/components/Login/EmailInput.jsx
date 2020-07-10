import React from 'react';
import InputField from './InputField';

export default class EmailInput extends InputField{

    render() {
        return (
            <div className="input-group form-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="username" 
                onChange={this.handleChange.bind(this)}/>
            </div>
        );
    }
}