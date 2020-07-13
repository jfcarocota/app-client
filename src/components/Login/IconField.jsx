import React, {Component} from 'react';

export default class IconField extends Component{

    render() {
        return (
            <div className="input-group-prepend">
                <span className="input-group-text">{this.props.icon}</span>
            </div>
        );
    }
}