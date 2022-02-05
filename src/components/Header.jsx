/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './styles/Header.css'
import Logo from './img/logo.png'
import Profile from './img/profile-icon.jpg'

export default ({color}) => {
    return(
        <header className={color}>
            <img className="Header--logo" src={Logo} alt="logo" />
            <img className="Header--profile" src={Profile} alt="profile-icon" />
        </header>
    );
}