import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';


function Hi(){
    return <p>Hi there</p>
}

render(
    
    <Hi />
    
    
    , document.getElementById('app'));

