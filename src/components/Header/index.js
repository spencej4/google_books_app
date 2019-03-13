import React from "react";
import {  Link } from 'react-router-dom';

export default class MainMenu extends React.Component {   
    render(){
        return (
            <div className='header'>
                <Link to="/" className='link-container'>
                    <p className='header-link'>Home</p>
                </Link>
                <Link to="/search" className='link-container'>
                    <p className='header-link'>Search</p>
                </Link>
                <Link to="/saved" className='link-container'>
                    <p className='header-link'>Saved</p>
                </Link>
                
            </div>
        );
    };
}
