import { Link } from 'react-router-dom';
import React from 'react';

const createStyles = (show) => ({
    display: show ? 'block' : 'none'
})

export default ({ isAuthorised }) => (
    <div className="main-link-container">
        <Link to='/' className="main-link">HOME</Link>
        <Link style={createStyles(!isAuthorised)} to='/register' className="main-link">SIGN UP</Link>
        <Link  style={createStyles(!isAuthorised)} to='/login' className="main-link">LOG IN</Link>
        <Link style={createStyles(isAuthorised)} to='/logout' className="main-link">LOG OUT</Link>
    </div>
)