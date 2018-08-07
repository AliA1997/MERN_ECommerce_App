import React, { Component } from 'react';
//import withRouter so, you can access this.props.history
import { withRouter } from 'react-router-dom';
//Import the css file for styling.
import './Navbar.css';

class Navbar extends Component {
    //Define your linkFunc so it will redirect to specified route provided via argument.
    linkFunc(path) {
        this.props.history.push(path);
    }
    login = () => {
        //Define your encodedURi since your are dealing with oAuth, so it can be secure, and oAuth and decode it.
        //Have your location origin, with your auth0 proxy which will be auth/calllback
        const redirectURI = encodeURIComponent(`${window.location.origin}/auth/callback`);
        //Redirect the user to your Auth0 domain, with the correct query parameters to retrieve code from auth0. 
        window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/login?client=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectURI}`;
    }
    render() {
        return (
            <div className='nav container'>
                <div className='desktop-nav'>
                    {/* Make sure every link uses linkFunc, except the login link. s*/}
                    <p className="nav-link" onClick={() => this.linkFunc('/')}>Home</p>
                    <p className="nav-link" onClick={() => this.linkFunc('/about')}>About</p>
                    <p className="nav-link" onClick={() => this.linkFunc('/cart')}>Cart</p>
                    <p className="nav-link" onClick={() => this.login()} >Login</p>
                </div>
            </div>
        );
    }
}
//Then wrap our Component with the HOC.
export default withRouter(Navbar);