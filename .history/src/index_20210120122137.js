import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter } from 'react-router-dom';


function Hi(){
    return <p>Hi there</p>
}

render(<Hi />, document.getElementById('app'));

