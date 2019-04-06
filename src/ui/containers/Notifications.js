import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { connect } from 'react-redux';


import { hideNotifications } from '../actions';

class Notifications extends Component {


  handleClose = () => {
    this.props.hideNotifications();
  }


  render() {
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={this.props.open}
        onClose={this.handleClose}
        message={this.props.message}
        autoHideDuration={4000}
      />
    );
  }
}

const mapStateToProps = state => ({
  open: state.ui.notifications.open,
  message: state.ui.notifications.message
})

const mapDispatchToProps = dispatch => ({
  hideNotifications: () => dispatch(hideNotifications())
})

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);