import React, {Component, Fragment} from 'react';
import MyButton from './MyButton';

export default class Hello extends Component{

    render() {
        return (
            <Fragment>
                <h1>Hello sofia</h1>
                <h3>Maxi</h3>
                <MyButton/>
            </Fragment>  
        );
    }
}