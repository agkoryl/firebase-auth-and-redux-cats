import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Avatar from 'react-avatar';


import Form from './auth/containers/register';
import Login from './auth/containers/Login';
import LogOut from './auth/containers/LogOut';
import LogInInfo from './LogInInfo';
import CatGrid from './CatGrid';
import Menu from './ui/components/Menu';
import './App.css';
import { auth } from './firebase';
import Upload from './Upload';
import Notifications from './ui/containers/Notifications';

import { login, logout } from './auth/actions';
import { showNotifications } from './ui/actions';



class App extends Component {


  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.props.login(user.providerData[0]);
        this.props.showNotifications("You've logged successfully")

      } else {
        this.props.logout();
      }
    })
  }


  render() {

    return (
      <BrowserRouter>
        <div className="main-container">
          <Notifications />
          <Menu isAuthorised={this.props.auth} user={this.props.user}> </Menu>
          {this.props.isAuthorised ? <Avatar user={this.props.user}></Avatar> : null}

          <div>

            <Route exact path='/' component={this.props.auth ? CatGrid : LogInInfo}></Route>
            <Route path='/register' component={Form} />
            <Route path='/login' component={Login} />
            <Route path='/logout' component={LogOut} />
            <Route path='/upload' component={Upload} />

          </div>
        </div>

      </BrowserRouter>

    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth.isAuthorized,
  user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  showNotifications: (message) => dispatch(showNotifications(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

