import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404, Page Not Found &nbsp;<i className="far fa-sad-tear"></i></h1>
            <Link to="/"><button className="btn-backHome">Go To Home Page</button> </Link>
        </div>
    );
};

export default NotFound;