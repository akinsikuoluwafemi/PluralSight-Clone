import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';




export default function App() {
    return (
      <div className="container-fluid">
        <Route exact path="/" component={HomePage} />
        <Route  path="/about" component={HomePage} />
      </div>
    );
}
