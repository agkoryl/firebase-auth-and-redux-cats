import { Link } from 'react-router-dom';
import React from 'react';
import MyAvatar from './Avatar';

const createStyles = (show) => ({
    display: show ? 'block' : 'none'
})

export default ({ isAuthorised, user }) => (
    <div className="main-link-container">
        <Link to='/' className="main-link">HOME</Link>
        <Link style={createStyles(!isAuthorised)} to='/register' className="main-link">SIGN UP</Link>
        <Link style={createStyles(!isAuthorised)} to='/login' className="main-link">LOG IN</Link>
        <Link style={createStyles(isAuthorised)} to='/logout' className="main-link">LOG OUT</Link>
        <Link style={createStyles(isAuthorised)} to='/upload' className="main-link">UPLOAD</Link>
        <div style={{marginLeft: "auto", display: "flex", alignItems: "center"}}>
            {isAuthorised ? <div style={{paddingRight: "15px"}}><p style={{ color: "white" }}>{user.displayName}</p></div> : null}
            {isAuthorised ? <MyAvatar user={user}></MyAvatar> : null}
        </div>
    </div>
)