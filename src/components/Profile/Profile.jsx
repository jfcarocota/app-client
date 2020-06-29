import React, { Fragment } from 'react';
import RouteProtected from '../../RouteProtected';
import Cookies from 'js-cookie'
import jwt from 'jwt-decode';
import defaulProfile from '../../defaulProfile.jpg';

export default class Profile extends RouteProtected {

    render() {
        if(Cookies.get('session')){
            const {sessionInfo} = jwt(Cookies.get('session'));
            const {name, profilePicture, role, age} = sessionInfo;
            console.log(sessionInfo);
            return (
                <Fragment>
                    <h1>Profile</h1>
                    <img src={profilePicture === 'profile.jpg' ? defaulProfile : ''} alt="profilePicture"/>
                    <h4>Nombre de usuario: {name}</h4>
                    <h4>Edad: {age}</h4>
                    <h4>Cargo: {role}</h4>
                </Fragment>
            );
        }
        return <div></div>
    }
}