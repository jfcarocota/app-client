import React, {Component} from 'react';

export default class SubmitButton extends Component{

    render() {
        return (
            <div className="form-group">
                <button type="submit" className="btn float-right login_btn">Enviar</button>
            </div>
        );
    }
}