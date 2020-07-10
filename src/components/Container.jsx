import React, {Component, Fragment} from 'react';

export default class Container extends Component{

    constructor(props){
        super(props);

        this.state = {
            content: props.content ? props.content : <Fragment></Fragment>
        }
    }

    render() {
        const {content} = this.state;
        return (
            <div className="container">{content}</div>
        );
    }
}