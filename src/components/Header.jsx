/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './styles/Header.css';

export default ({color}) => {
    return(
        <header className={color}>
            <img className="Header--logo" src="img/logo.png" alt="logo" />
            <img className="Header--profile" src="img/profile-icon.jpg" alt="profile-icon" />
        </header>
    );
}