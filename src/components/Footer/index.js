//@flow
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import glamorous from 'glamorous';

class Footer extends Component<*> {
  render() {
    return (
      <FooterWrapper>
        <Link to="/admin">Admin</Link>
      </FooterWrapper>
    );
  }
}

export default withRouter(Footer);

const FooterWrapper = glamorous.div({
  background: '#ECECEC',
  padding: '16px',
  textAlign: 'center',
  '& a': {
    color: '#666'
  }
});
