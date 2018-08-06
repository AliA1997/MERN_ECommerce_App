import React, { Component } from 'react';
//Import Home in order to render Home Component
import Home from'./components/container/Home/Home';
import Navbar from'./components/container/Navbar/Navbar';
//Configure the routes by importing the default export from the routes.js file, 
//Then delete the Home component, and put the routes underneath the nav.
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {routes}
      </div>
    );
  }
}

export default App;
