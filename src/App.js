import React, { Component } from 'react';

import Form from './register';

import CatGrid from './CatGrid';

class App extends Component {

  state = {
    isAuthorised: false
  }

  componentDidMount() {

  }

  setIsAuthorised = (value) => {
    this.setState({ isAuthorised: value });
  }

  render() {

    const catGrid = this.state.isAuthorised ? <CatGrid /> : null;

    return (
      <div>
        <Form setIsAuthorised={this.setIsAuthorised}></Form>
        {catGrid}
      </div>

    );
  }
}

export default App;