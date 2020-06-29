import React, {Fragment} from 'react';
import InputField from './InputField';

export default class PasswordInput extends InputField{

    render() {
        return (
             <Fragment>
                 <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                    </div>
                    <input type="password" className="form-control" placeholder="password" 
                    value={this.state.formContext.password}
                    onChange={this.handleChange.bind(this)}/>
                </div>
             </Fragment>
        );
    }
}