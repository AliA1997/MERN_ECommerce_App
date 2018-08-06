import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Now import your Router for your routes and wrap your app in it. 
import { BrowserRouter } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
// registerServiceWorker();
