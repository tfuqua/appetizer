// @flow
import React, { Component } from 'react';
import glamorous from 'glamorous';
import Snackbar from 'material-ui/Snackbar';
import Slide from 'material-ui/transitions/Slide';
import SuccessIcon from 'material-ui-icons/CheckCircle';

type Props = {
  hideMessage: Function
};
type State = {
  open: boolean
};
class ToastMessage extends Component<Props, State> {
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
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={this.state.open}
        autoHideDuration={3500}
        transition={Transition}
        onRequestClose={this.handleRequestClose}
        message={
          <MessageWrapper>
            <SuccessIcon />
            {this.props.message.message}
          </MessageWrapper>
        }
      />
    );
  }
}

export default ToastMessage;

const Transition = props => <Slide direction="left" {...props} />;

const MessageWrapper = glamorous.span({
  display: 'flex',
  alignItems: 'center',
  fontWeight: '300',
  '& svg': {
    marginRight: '8px',
    color: '#21A761'
  }
});
