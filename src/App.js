import React, { Component } from 'react';
//Import Home in order to render Home Component
// import Home from'./components/container/Home/Home';
import Navbar from'./components/container/Navbar/Navbar';
//Configure the routes by importing the default export from the routes.js file, 
//Then delete the Home component, and put the routes underneath the nav.
import routes from './routes';
//import withROuter since you are using redux, and you want your app to have access to this.props.history.
import { withRouter } from 'react-router-dom';
//Import connect from redux to have access your initialState in the reducer, and all it's actions.
import { connect } from 'react-redux';
//import actions that will be implemented in your reducer. 
import { login, logout } from './redux/reducer';
//import axios to get your user session from your backend.
import axios from 'axios';
import './App.css';

class App extends Component {
  //In it's componentDidMount  get the session, and if it has data set your intialState user to it.
  componentDidMount() {
    axios.get('/api/user-data')
    .then(res => {
      //Destruct the dispatch props from this.props that will be responsible for dispatching or initiating actions from your reducer.
      const { dispatch } = this.props;
      if(res.data.user) {
        //Dispatch the login function with the user data. 
        dispatch(login(res.data.user));
        //Else logout the user from the intialState.
      } else {
        //Dispatch the logout the user by default if there is no data in session.
        dispatch(logout());
      }
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        {routes}
      </div>
    );
  }
}

//THen connect your app to your reducer.
export default withRouter(connect()(App));
