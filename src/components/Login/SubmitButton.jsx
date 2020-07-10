import React, {Component} from 'react';

export default class SubmitButton extends Component{

    constructor(props){
        super(props);

        this.state = {
            onClick: props.onClick ? props.onClick : ()=> console.log('click')
        }
    }
    
    render() {
        return (
            <div className="form-group">
                <button onClick={this.state.onClick} type="submit" className="btn float-right login_btn">Enviar</button>
            </div>
        );
    }
}