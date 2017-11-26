// @flow
import React, { Component } from 'react';
import glamorous from 'glamorous';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
import SuccessIcon from 'material-ui-icons/CheckCircle';
import ErrorIcon from 'material-ui-icons/Warning';

class SnackbarMessage extends Component {
  state = { open: true };

  handleRequestClose = (event: Event, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false }, this.hideMessage);
  };

  hideMessage = () => {
    //Wait for snackbar to trasition out then hide message
    setTimeout(() => {
      this.props.hideMessage();
    }, 200);
  };

  render() {
    let type = this.props.message.type || 'ERROR';
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={this.state.open}
        autoHideDuration={3500}
        transition={Transition}
        onRequestClose={this.handleRequestClose}
        message={
          <MessageWrapper type={type}>
            {type === 'ERROR' ? <ErrorIcon /> : <SuccessIcon />}
            {this.props.message.message}
          </MessageWrapper>
        }
        action={[
          <IconButton key="close" aria-label="Close" color="inherit" onClick={this.handleRequestClose}>
            <CloseIcon />
          </IconButton>
        ]}
      />
    );
  }
}

export default SnackbarMessage;

const Transition = props => <Slide direction="left" {...props} />;

const MessageWrapper = glamorous.span(
  {
    display: 'flex',
    alignItems: 'center',
    fontWeight: '300',
    '& svg': {
      marginRight: '8px'
    }
  },
  props => ({
    '& svg': {
      color: props.type !== 'ERROR' ? '#21A761' : '#FF504D'
    }
  })
);
