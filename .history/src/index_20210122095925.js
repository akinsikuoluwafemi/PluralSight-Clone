import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import "./index.css";
import configureStore from './redux/configureStore';
import {Provider as ReduxProvider } from 'react-redux';

const store = configureStore()




render(
  <ReduxProvider>

  <Router>
    <App />
  </Router>,

  document.getElementById("app")
);

