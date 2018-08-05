import React, { Component } from 'react';
//Import the css file for styling.
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div className='nav container'>
                <div className='desktop-nav'>
                    <p className="nav-link">Home</p>
                    <p className="nav-link">About</p>
                    <p className="nav-link">Cart</p>
                    <p className="nav-link">Login</p>
                </div>
            </div>
        );
    }
}