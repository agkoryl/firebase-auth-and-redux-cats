import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Form from './register';
import Login from './Login';
import LogOut from './LogOut';
import LogInInfo from './LogInInfo';
import RestrictedRoutes from './RestrictedRoutes';
import CatGrid from './CatGrid';
import Menu from './Menu';
import './App.css';

class App extends Component {

  state = {
    isAuthorised: false
  }

  setIsAuthorised = (value) => {
    this.setState({ isAuthorised: value });
  }

  render() {

    return (
      <BrowserRouter>
        <div className="main-container">
       
          <Menu isAuthorised={this.state.isAuthorised}/>
            

          <div>
            <Route exact path='/' component={this.state.isAuthorised ? CatGrid : LogInInfo}></Route>
            <Route path='/register' render={(props) => <Form {...props} setIsAuthorised={this.setIsAuthorised} />} />
            <Route path='/login' render={(props) => <Login {...props} setIsAuthorised={this.setIsAuthorised} />} />
            <Route path='/logout' render={(props) => <LogOut {...props} setIsAuthorised={this.setIsAuthorised} />} />

          </div>
        </div>

      </BrowserRouter>

    );
  }
}

export default App;