import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <div className="jumbotron">
            <h1>Pluralsight Administration</h1>
            <p>React, Redux and React Router for ultra-responsive web apps.</p>
            <Link to="about" className="btn btn">
            
            </Link>
        </div>
    )
}
