import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';


function Hi(){
    return <p>Hi there</p>
}



render(
  <Router>
    <Hi />
  </Router>,

  document.getElementById("app")
);

