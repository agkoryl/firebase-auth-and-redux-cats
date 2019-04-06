import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import Form from './register';
import Login from './Login';
import LogOut from './LogOut';
import LogInInfo from './LogInInfo';
import RestrictedRoutes from './RestrictedRoutes';
import CatGrid from './CatGrid';
import Menu from './Menu';
import './App.css';
import { auth } from './firebase';
import Upload from './Upload';
import Notifications from './ui/containers/Notifications';
import store from './store';


class App extends Component {

  state = {
    isAuthorized: false,
    user: {

    }
  }

  // setIsAuthorised = (value) => {
  //   this.setState({ isAuthorised: value });
  // }


  componentDidMount() {
    auth.onAuthStateChanged(user => {
      console.log(auth.currentUser);
      if (user) {
        this.setState({
          isAuthorized: true,
          user: user.providerData[0]
        });

      } else {
        this.setState({ isAuthorized: false });
      }
    })
  }


  render() {

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="main-container">
            <Notifications />
            <Menu isAuthorised={this.state.isAuthorized} user={this.state.user}> </Menu>


            <div>

              <Route exact path='/' component={this.state.isAuthorized ? CatGrid : LogInInfo}></Route>
              <Route path='/register' component={Form} />
              <Route path='/login' component={Login} />
              <Route path='/logout' component={LogOut} />
              <Route path='/upload' component={Upload} />

              <div>ble</div>
            </div>
          </div>

        </BrowserRouter>
      </Provider>


    );
  }
}

export default App;

//<Route exact path='/' component={this.state.isAuthorised ? CatGrid : LogInInfo}></Route>
//<Route path='/register' render={(props) => <Form {...props} setIsAuthorised={this.setIsAuthorised} />} />
//<Route path='/login' render={(props) => <Login {...props} setIsAuthorised={this.setIsAuthorised} />} />
//<Route path='/logout' render={(props) => <LogOut {...props} setIsAuthorised={this.setIsAuthorised} />} />  