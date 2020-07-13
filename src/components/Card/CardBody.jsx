import React, {Component} from 'react';

export default class CardBody extends Component{

    render() {
        return (
            <div className="card-body">{this.props.children}</div>
        );
    }
}