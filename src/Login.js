import React from 'react';

import { auth } from './firebase';

class Login extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        //zeby sie nie przeladowywala strona, bo automatycznie ten form sie gdzies wysyla
        event.preventDefault();
        this.setState({ email: "", password: "" })
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(response => {
            this.props.setIsAuthorised(true);
            this.props.history.push('/');
        }).catch(error => {
            console.error(`Error: ${error.code} ${error.message}`);
        })
    }



    render() {
        return (
            <div className="register-container">
                <div>
                    <h2>LOG IN</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input value={this.state.email} type="email" name="email" onChange={this.handleChange} placeholder="enter your email" style={{ margin: 5, fontSize: 20 }} ></input>
                    </div>
                    <div>
                        <input value={this.state.password} type="password" name="password" onChange={this.handleChange} placeholder="enter your password" style={{ margin: 5, fontSize: 20 }}></input>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <input type="submit" value="LOG IN" style={{ margin: 5, backgroundColor: "#357266", width: "100px", height: "40px", color: "white", textAlign: "center", border: "none", fontSize: "20px" }} />
                    </div>
                </form>
            </div>

        )
    }
}

export default Login;