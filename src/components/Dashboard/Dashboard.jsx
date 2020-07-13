import React, { Component } from 'react';
import RouteProtected from '../../RouteProtected';
//import Cookies from 'js-cookie'
//import jwt from 'jwt-decode';
//import defaulProfile from '../../defaulProfile.jpg';

export default class Dashboard extends Component{

    render() {
        return (
            <RouteProtected>
                <h1>Dashboard</h1>
            </RouteProtected>
        );
    }
}