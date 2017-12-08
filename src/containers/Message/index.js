// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hideMessage, TOAST_RIGHT } from './actions';
import { withRouter } from 'react-router-dom';
import Toast from './Toast';
import Message from './Message';

type Props = {
  message?: Object,
  container: string,
  hideMessage: Function
};

class MessageContainer extends Component<Props> {
  render() {
    if (this.props.message && this.props.message.container === this.props.container) {
      switch (this.props.message.container) {
        case TOAST_RIGHT:
          return <Toast {...this.props} hideMessage={this.props.hideMessage} />;
        default:
          return <Message {...this.props} hideMessage={this.props.hideMessage} />;
      }
    } else {
      return null;
    }
  }
}

function mapStateToProps(store) {
  return {
    message: store.messages.message
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hideMessage }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageContainer));
