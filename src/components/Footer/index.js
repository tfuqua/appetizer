//@flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import glamorous from 'glamorous';

class Footer extends Component<*> {
  render() {
    return (
      <footer>
        {process.env.NODE_ENV !== 'production' ? (
          <StyledDiv>
            <Link to="/admin">Admin</Link>
          </StyledDiv>
        ) : null}
      </footer>
    );
  }
}

export default Footer;

const StyledDiv = glamorous.div({
  padding: '16px 16px',
  marginTop: '32px',
  background: '#D8D8D8',
  textAlign: 'center',
  '& a': {
    color: '#555'
  }
});
