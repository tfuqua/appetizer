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
  background: '#fff',
  padding: '16px',
  marginTop: '48px',
  textAlign: 'center',
  '& a': {
    color: '#666'
  }
});
