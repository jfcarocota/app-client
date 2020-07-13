import React, {Component} from 'react';

export default class InputGroup extends Component{

    render() {
        return (
            <div className="input-group form-group">
                {this.props.children}
            </div>
        );
    }
}