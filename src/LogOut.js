import React from 'react';
import { auth } from './firebase';



class LogOut extends React.Component {

    componentDidMount() {
        auth.signOut().then(response => {
            // this.props.setIsAuthorised(false);
            this.props.history.push('/');
        })
            .catch(error => {

            })
    }

    render() {
        return (
            <div></div>
        )
    }
}


export default LogOut;