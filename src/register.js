import React from 'react';

import './register.css';
import { auth } from './firebase';

class Form extends React.Component {

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
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then(response => {
            this.props.setIsAuthorised(true);
        }).catch(error => {
            console.error(`Error: ${error.code} ${error.message}`);
        })
    }



    render() {
        return (
            <div className="register-container">
                <div>
                    <h2>SIGN UP</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input value={this.state.email} type="email" name="email" onChange={this.handleChange} placeholder="enter your email" style={{ margin: 5, fontSize: 20 }} ></input>
                    </div>
                    <div>
                        <input value={this.state.password} type="password" name="password" onChange={this.handleChange} placeholder="enter your password" style={{ margin: 5, fontSize: 20 }}></input>
                    </div>
                    <div>
                        <input type="submit" value="Submit" style={{ margin: 5, backgroundColor: "#357266", width: "100px", height: "40px", color: "white", textAlign: "center", border: "none" }} />
                    </div>
                </form>
            </div>

        )
    }
}

export default Form;