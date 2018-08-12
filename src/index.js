import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Now import your Router for your routes and wrap your app in it. 
import { BrowserRouter } from 'react-router-dom';
//import Provider to connect your app component to the store,  by wrapping your BrowserRouter
import { Provider } from 'react-redux';
//import the store that will be your store for your app .
import store from './redux/store';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
// registerServiceWorker();
