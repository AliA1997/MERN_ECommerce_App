const User = require('../models/user');
///import axios to do axios call .
const axios = require('axios');
module.exports = {
    readUserData(req, res) {
      //Get the session, for update the reducer.
      res.status(200).json({user: req.session.user});  
    },
    addToCart(req, res){
    },
    removeFromCart(req, res) {

    },
    
    login(req, res) {
        //Now setup our auth post request to retrive accessTokenResposne. 
        return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, {
            client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
            client_secret: process.env.REACT_APP_AUTH0_CLIENT_SECRET,
            code: req.query.code, 
            grant_type: 'authorization_code',
            redirect_uri: `http://${req.headers.host}/auth/callback`
        }).then(accessTokenResponse => {
            //Get the data from the response. 
            const accessToken = accessTokenResponse.data.access_token;
            console.log(accessToken)
            //Now return a axios get retrieving the user information usiing the access token.
            return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo?access_token=${accessToken}`).then(userDataResponse => {
                //Destruct the  data from  from auth0
                const { name, nickname, email, picture, sub } = userDataResponse.data;
                console.log('user data--------', userDataResponse.data);
                // res.status(200).json({message: 'mEssages'})
                User.findOne({auth0_id: sub}, (err, user) => {
                    if(err) console.log('Login Error--------------', err);

                    //If the user is undefined.
                    if(!user) { 
                        //Create a new user. 
                        let newUser = new User({
                            name: name,
                            email: email,
                            username: nickname,
                            profile_picture: picture,
                            auth0_id: sub
                        });
                        //Assign the user to the session.
                        req.session.user = newUser;
                        //Save the session
                        req.session.save();
                        //Save the newUser instance to mongodb
                        newUser.save();
                    } 
                    req.session.user = user;
                    req.session.save();
                    res.redirect('/');
                })
            }).catch(err => console.log('Auth0 get user info Error------------', err));
        }).catch(err => console.log('Auth0 Axios Post backend Error------------', err));
    },
    logout(req, res) {
        //Destroy the session, which logout the user, since when the user session is undefined the redux also logout's
        // the user in the frontend.
        req.session.destroy();
        //Send a message informing  a user successfully logged out.
        res.status(200).json({message: 'Logout Successfully!'});
    }
}