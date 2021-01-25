import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import "./index.css";
import configureStore from './redux/configureStore';
import {} from 'react-redux'

const store = configureStore()




render(
  <Router>
    <App />
  </Router>,

  document.getElementById("app")
);
