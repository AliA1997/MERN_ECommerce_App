import React, { Component } from 'react';
//Import Home in order to render Home Component
import Home from'./components/container/Home/Home';
import Navbar from'./components/container/Navbar/Navbar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
