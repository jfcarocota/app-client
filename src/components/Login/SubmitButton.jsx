import React, {Component} from 'react';
import Button from '../Button';

export default class SubmitButton extends Component{

    render() {
        const{onClick, value} = this.props;
        return (
            <Button onClick={onClick} type="submit" value={value}/>
        );
    }
}