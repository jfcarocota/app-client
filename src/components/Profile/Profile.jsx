import React, { Component } from 'react';
import RouteProtected from '../../RouteProtected';
//import {Link} from 'react-router-dom';
//import Cookies from 'js-cookie'
//import jwt from 'jwt-decode';
//import defaulProfile from '../../defaulProfile.jpg';

export default class Profile extends Component{

    render() {
        return (
            <RouteProtected>
                <h1>Profile</h1>
            </RouteProtected>
        );
    }
}