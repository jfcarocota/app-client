import React, {Component} from 'react';
import Card from '../Card/Card';
import CardBody from '../Card/CardBody'

export default class LoginCard extends Component{

    render() {
        return (
            <div className="d-flex justify-content-center h-100">
                <Card>
                    <CardBody>
                        {this.props.children}
                    </CardBody>
                </Card>
            </div>
        );     
    }
}