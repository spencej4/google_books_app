import React from "react";
import {  Link } from 'react-router-dom';

export default class MainMenu extends React.Component {   
    render(){
        return (
            <div className='header'>
                <Link to="/">
                    <p className='header-link'>Home</p>
                </Link>
                <Link to="/search">
                    <p className='header-link'>Search</p>
                </Link>
                <Link to="/saved">
                    <p className='header-link'>Saved</p>
                </Link>
                
            </div>
        );
    };
}
