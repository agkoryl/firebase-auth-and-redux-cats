import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';


class Notifications extends Component {


  handleClose = () => {

  }


  render() {
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={true}
        onClose={this.handleClose}
        message={<span>I love snacks</span>}
      />
    );
  }
}

export default Notifications;