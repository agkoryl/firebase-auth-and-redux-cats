import React from 'react';
import Avatar from 'react-avatar';


class MyAvatar extends React.Component {
    render() {
        const {user} = this.props;

        if (user.providerId === "google.com") {
            return <Avatar src={user.photoURL} size="40" round={true}/>
        } else {
            return(
                null
            )
        }
       
    }
}

export default MyAvatar;